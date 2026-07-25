import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.useGlobalPipes(new ValidationPipe());

  const port = Number(process.env.PORT) || 3000;
  const logger = new Logger('Info');
  await app.listen(port, '0.0.0.0');
  logger.log(`Application listening on port ${port}`);
}

bootstrap();
