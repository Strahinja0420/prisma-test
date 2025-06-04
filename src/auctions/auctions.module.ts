import { Module } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { BidsService } from 'src/bids/bids.service';

@Module({
  controllers: [AuctionsController],
  providers: [AuctionsService, BidsService],
})
export class AuctionsModule {}
