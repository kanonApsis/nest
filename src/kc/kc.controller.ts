/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('kc')
export class KcController {
  @Get()
  xyz(): Record<string, any> {
    return { status_code: 200, msg: `Hello from kanon` };
  }
}
