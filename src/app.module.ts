import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlindTypeModule } from './modules/blind-type/blind-type.module';
import { PaintTogetherModule } from './modules/paint-together/paint-together.module';

@Module({
  imports: [BlindTypeModule, PaintTogetherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
