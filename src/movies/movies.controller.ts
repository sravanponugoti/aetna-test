import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { Movies } from '../entities/movies.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly service: MoviesService) {}

    @Get('')
    async getAllMovies(@Query('page') page: string): Promise<Movies[]> {
        return await this.service.getMovies(Number(page) || 1);
    }

    @Get('moviesByYear')
    async getMoviesByYear(@Query('page') page: string, @Query('year') year: string): Promise<Movies[]> {
        return await this.service.getMoviesByYear(Number(page) || 1, year);
    }

    @Get('moviesByGenre')
    async getMoviesByGenre(@Query('page') page: string, @Query('genre') genre: string): Promise<Movies[]> {
        return await this.service.getMoviesByGenre(Number(page) || 1, genre);
    }

    @Get(':id')
    async getMovie(@Param('id') id: string): Promise<Movies> {
        return await this.service.getMovie(Number(id));
    }
}
