import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UploadController],
  providers: [PrismaService],
})
export class UploadModule {}
