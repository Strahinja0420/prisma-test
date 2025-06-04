import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { AuctionsService } from './auctions.service';
import { BidsService } from 'src/bids/bids.service';
import { CreateBidDto } from './dto/create-bid.dto';

@Controller('auctions')
export class AuctionsController {
  constructor(
    private readonly auctionService: AuctionsService,
    private readonly bidService: BidsService,
  ) {}

  @Post()
  createAuction(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionService.createAuction(createAuctionDto);
  }

  @Post(':id/bid')
  createBid(
    @Body() createBidDto: CreateBidDto,
    @Param(':id') auctionId: number,
  ) {
    return this.auctionService.createBid(createBidDto, auctionId);
  }

  @Get()
  findAll() {
    return this.auctionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.auctionService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
  //   return this.auctionsService.update(+id, updateAuctionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.auctionsService.remove(+id);
  // }
}
