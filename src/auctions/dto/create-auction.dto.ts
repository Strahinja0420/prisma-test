export class CreateAuctionDto {
  title: string;

  content?: string;

  authorId?: number;

  endDate : Date;
}
