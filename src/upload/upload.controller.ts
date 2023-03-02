import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);

          const path = require('path');

          const filenameWithoutExt = path.parse(file.originalname).name;

          const ext = extname(file.originalname);

          const filename = `${filenameWithoutExt}-${uniqueSuffix}${ext}`;

          callback(null, filename);
        },
      }),
    }),
  )
  async handleUpload(@UploadedFile() file: Express.Multer.File) {
    try {
      const uploadedFile = await this.prisma.file.create({
        data: {
          name: file.filename,
          path: file.path,
          size: file.size,
          mimetype: file.mimetype,
        },
      });
      return {
        filename: file.filename,
        filePath: file.path,
      };
    } catch (error) {
      return {
        error: 'Error uploading file',
      };
    }
  }
}
