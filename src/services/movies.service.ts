import { Injectable } from '@nestjs/common';
import { Movies } from '../entities/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, FindOptionsWhere, Like, Repository } from 'typeorm';
import { Ratings } from '../entities/ratings.entity';

interface MovieDetail extends Movies {
    avgRating: number;
}

@Injectable()
export class MoviesService {
    /* pageSize is configurable, and it is recommended to be stored in config constants */
    private readonly pageSize = 50;

    constructor(
      @InjectRepository(Movies, 'moviesConnection') private movieRepository: Repository<Movies>,
      @InjectRepository(Ratings, 'ratingsConnection') private ratingsRepository: Repository<Ratings>
    ) {}

    getCriteria() {

    }

    async getMoviesByYear(pageNumber: number, year: string): Promise<Movies[]> {
        const criteria: FindOptionsWhere<Movies> = {
            releaseDate: Like(`%${year}%`)
        }
        return await this.getMovies(pageNumber, criteria);
    }

    async getMoviesByGenre(pageNumber: number, genre: string): Promise<Movies[]> {
        const criteria: FindOptionsWhere<Movies> = {
            genres: Like(`%${genre}%`)
        }
        return await this.getMovies(pageNumber, criteria);
    }

    // Get all movies
    async getMovies(pageNumber: number, criteria?: FindOptionsWhere<Movies>): Promise<Movies[]> {
        return await this.movieRepository.find({
            where: criteria,
            order: {
                releaseDate: 'desc',
            },
            skip: (pageNumber - 1) * this.pageSize,  // Skip records based on the page number
            take: this.pageSize,               // Limit the number of records per page
            select: ['movieId', 'imdbId', 'title', 'genres', 'releaseDate', 'budget']
        });
    }

    async getMovie(id: number ): Promise<MovieDetail> {
        const movie = await this.movieRepository.findOne({
            where: {
                movieId: id,
            }
        });

        const ratings = await this.ratingsRepository.find({
            where: {
                movieId: id,
            }
        });

        const avgRating = ratings.reduce((sum, item) => sum + Number(item.rating), 0) / ratings.length;
        return {...movie, avgRating} as MovieDetail;
    }

}
