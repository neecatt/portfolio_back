import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ExperienceModule } from './experience/experience.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [ExperienceModule, PrismaModule, ProjectsModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure() {
    console.log('AppModule configured');
  }
}
