import { Module } from '@nestjs/common';
import { SellingController } from './selling.controller';
import { SellingService } from './selling.service';

@Module({
  controllers: [SellingController],
  providers: [SellingService],
  exports:[SellingService]
})
export class SellingModule {}
