import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  constructor(private readonly prisma: PrismaService) {}

  async deleteFilesInDirectory(directoryPath: string): Promise<void> {
    const files = await fs.promises.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);

      try {
        await fs.promises.unlink(filePath);
      } catch (error) {
        console.error(`Error deleting file ${filePath}: ${error}`);
      }
    }
  }

  async createFile(file: Express.Multer.File) {
    const { filename } = file;

    const createFile = await this.prisma.file.create({
      data: {
        name: filename,
        path: `./files/${filename}`,
        size: file.size,
        mimetype: file.mimetype,
      },
    });

    const deleteRest = await this.prisma.file.deleteMany({
      where: {
        id: {
          not: createFile.id,
        },
      },
    });
    return createFile;
  }
}
