import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ExperienceModule } from './experience/experience.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadMiddleware } from './upload/upload.middleware';
import { UploadService } from './upload/upload.service';

@Module({
  imports: [
    ExperienceModule,
    PrismaModule,
    UploadModule,
    MulterModule.register({
      dest: './files',
    }),
    DownloadModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UploadService],
})
export class AppModule implements NestModule {
  configure(consumer) {
    consumer.apply(UploadMiddleware).forRoutes('upload');
  }
}
