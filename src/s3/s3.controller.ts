import { Controller, Get, Query } from '@nestjs/common';
import { S3Service } from './s3.service';

@Controller('s3')
export class S3Controller {
  constructor(private readonly s3Service: S3Service) {}

  @Get('presigned-url')
  async getPresignedUrl(
    @Query('filename') filename: string,
    @Query('type') type: string,
  ) {
    const url = await this.s3Service.generatePresignedUrl(filename, type);
    return { url };
  }

  @Get('download-url')
  async getDownloadUrl(@Query('filename') filename: string) {
    const url = await this.s3Service.generateDownloadUrl(filename);
    return { url };
  }
}
