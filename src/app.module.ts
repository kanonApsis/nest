import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KcController } from './kc/kc.controller';

@Module({
  imports: [],
  controllers: [AppController, KcController],
  providers: [AppService],
})
export class AppModule {}
