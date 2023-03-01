import { Injectable } from '@nestjs/common';
import { createReadStream, ReadStream } from 'fs';
import { join } from 'path';
import { UploadService } from 'src/upload/upload.service';


@Injectable()
export class DownloadService {

  constructor() {}
 
  async downloadFile(filename: string): Promise<ReadStream> {
    const path = `./files/${filename}`;
    const fileStream = createReadStream(path);

    return fileStream;
  }

  
}
