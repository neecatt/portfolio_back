// r2.service.ts
import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class S3Service {
  private readonly s3: AWS.S3;

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: new AWS.Endpoint(process.env.AWS_ENDPOINT),
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      region: 'auto',
      signatureVersion: 'v4',
    });
  }

  async generatePresignedUrl(filename: string, contentType: string) {
    const params = {
      Bucket: 'nijat-resume',
      Key: filename,
      Expires: 60,
      ContentType: contentType,
    };

    return this.s3.getSignedUrlPromise('putObject', params);
  }

  async generateDownloadUrl(filename: string) {
    const params = {
      Bucket: 'nijat-resume',
      Key: filename,
      Expires: 60,
      ResponseContentDisposition: 'attachment',
    };
    return this.s3.getSignedUrlPromise('getObject', params);
  }
}
