import { Module } from '@nestjs/common';
import { PaintTogetherController } from './paint-together.controller';
import { PaintTogetherService } from './paint-together.service';

@Module({
  controllers: [PaintTogetherController],
  providers: [PaintTogetherService],
})
export class PaintTogetherModule {}
