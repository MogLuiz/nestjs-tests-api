import { Injectable } from '@nestjs/common';

// The @Injectable() decorator defines a class as a provider.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
