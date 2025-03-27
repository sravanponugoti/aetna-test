import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies.controller';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../entities/movies.entity';
import { RatingsService } from '../services/ratings.service';
import { Ratings } from '../entities/ratings.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Movies], 'moviesConnection'),
        TypeOrmModule.forFeature([Ratings], 'ratingsConnection')
    ],
    controllers: [MoviesController],
    providers: [MoviesService, RatingsService],
})
export class MoviesModule {}
