import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { MoviesDataSource } from './data-source/movies-data-source';
import { RatingsDataSource } from './data-source/ratings-data-dource';
import { RatingsModule } from './ratings/ratings.module';
import { Movies } from './entities/movies.entity';
import { Ratings } from './entities/ratings.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...RatingsDataSource.options, // Ratings DB connection
      name: 'ratingsConnection'
    }),
    TypeOrmModule.forRoot({
      ...MoviesDataSource.options, // Movies DB connection
      name: 'moviesConnection'
    }),
    MoviesModule,
    RatingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
