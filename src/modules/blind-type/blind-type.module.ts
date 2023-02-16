import { Module } from '@nestjs/common';
import { BlindTypeController } from './blind-type.controller';
import { BlindTypeService } from './blind-type.service';

@Module({
  controllers: [BlindTypeController],
  providers: [BlindTypeService],
})
export class BlindTypeModule {}
