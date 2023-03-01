import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UploadService } from 'src/upload/upload.service';
import { DownloadService } from './download.service';
import { Response } from 'express';


@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService, private readonly uploadService: UploadService) {}

  @Get(':filename')
  async downloadFile(
    @Param('filename') filename: string,
    @Res() res: Response,
  ): Promise<void> {
    const fileStream = await this.downloadService.downloadFile(filename);

    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Type', 'application/pdf');

    fileStream.pipe(res);
  }


}
