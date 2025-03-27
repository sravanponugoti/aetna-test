import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingsController } from './ratings.controller';
import { Ratings } from 'src/entities/ratings.entity';
import { RatingsService } from 'src/services/ratings.service';

@Module({
    imports: [TypeOrmModule.forFeature([Ratings], 'ratingsConnection')],
    controllers: [RatingsController],
    providers: [RatingsService],
})
export class RatingsModule {}
