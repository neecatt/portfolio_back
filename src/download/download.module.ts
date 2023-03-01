import { Module } from '@nestjs/common';
import { DownloadService } from './download.service';
import { DownloadController } from './download.controller';
import { UploadService } from 'src/upload/upload.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DownloadController],
  providers: [DownloadService, UploadService, PrismaService]
})
export class DownloadModule {}
