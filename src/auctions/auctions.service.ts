import { Injectable } from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { DatabaseService } from 'src/database/database.service';
import { CreateBidDto } from './dto/create-bid.dto';

@Injectable()
export class AuctionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createAuction(createAuctionDto: CreateAuctionDto) {
    return this.databaseService.auction.create({
          data: {
            ...createAuctionDto,
            startDate: new Date(),
            endDate: new Date(),
          },
          include: {
            bids: true,
          },
        });
  }

  async createBid(createBidDto: CreateBidDto, auctionId : number) {
      return this.databaseService.bids.create({
        data: {
          ...createBidDto,
          bidTime: new Date(),
          auctionId
        },
      });
    }

  findAll() {
    return this.databaseService.auction.findMany({
      include : {
        bids : true
      }
    });
  }

  findOne(id: number) {
    return this.databaseService.auction.findUnique({
      where : {
        id
      }
    });
  }

  update(id: number, updateAuctionDto: UpdateAuctionDto) {
    return `This action updates a #${id} auction`;
  }

  remove(id: number) {
    return `This action removes a #${id} auction`;
  }
}
