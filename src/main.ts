import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const logger = new Logger('Info');
  logger.log(`Application listening on port 3000`);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe());
}

bootstrap();
