import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExperienceController } from './experience.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ExperienceController],
  providers: [ExperienceService, PrismaService],
})
export class ExperienceModule {}
