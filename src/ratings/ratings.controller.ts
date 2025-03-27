import { Controller, Get } from '@nestjs/common';
import { Ratings } from 'src/entities/ratings.entity';
import { RatingsService } from 'src/services/ratings.service';

@Controller('ratings')
export class RatingsController {
    constructor(private readonly service: RatingsService) {}
    
    @Get()
    async getRatings(): Promise<Ratings[]> {
        return await this.service.getRatings();
    }
}
