import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PrismaService } from './prisma/prisma.service';
import { ExperienceModule } from './experience/experience.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AdminModule, ExperienceModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
