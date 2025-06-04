import { Injectable } from '@nestjs/common';
import { CreateBidDto } from '../auctions/dto/create-bid.dto';
import { UpdateBidDto } from './dto/update-bid.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BidsService {
  constructor(private readonly db: DatabaseService) {}

  // async create(createBidDto: CreateBidDto) {
  //   return this.db.bids.create({
  //     data: {
  //       ...createBidDto,
  //       bidTime: new Date(),
  //     }
  //   });
  // }

  async findAll() {
    return this.db.bids.findMany(
      {
        include : {
          bidder : true
        }
      }
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} bid`;
  }

  update(id: number, updateBidDto: UpdateBidDto) {
    return `This action updates a #${id} bid`;
  }

  remove(id: number) {
    return `This action removes a #${id} bid`;
  }
}
