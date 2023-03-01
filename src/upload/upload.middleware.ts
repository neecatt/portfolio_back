import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UploadService } from './upload.service';

@Injectable()
export class UploadMiddleware implements NestMiddleware {
  constructor(private readonly uploadService: UploadService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // Call the service function before the controller function
    await this.uploadService.deleteFilesInDirectory('./files');

    // Call the controller function
    await next();
  }
}
