import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ratings } from 'src/entities/ratings.entity';

@Injectable()
export class RatingsService {
    constructor(@InjectRepository(Ratings, 'ratingsConnection') private ratingsRepository: Repository<Ratings>) {}

    // Get all ratings
    async getRatings(): Promise<Ratings[]> {
        return await this.ratingsRepository.find();
    }
}
