import { PartialType } from '@nestjs/swagger';
import { CreateBidDto } from '../../auctions/dto/create-bid.dto';

export class UpdateBidDto extends PartialType(CreateBidDto) {}
