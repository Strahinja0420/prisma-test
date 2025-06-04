import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuctionsModule } from './auctions/auctions.module';
import { BidsModule } from './bids/bids.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuctionsModule, BidsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
