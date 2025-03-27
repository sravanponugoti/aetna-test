import { DataSource } from 'typeorm';
import { Movies } from '../entities/movies.entity';  // Import your Movie entity

export const MoviesDataSource = new DataSource({
  type: 'sqlite',
  database: 'db/movies.db', // Path to your movies.db file
  synchronize: true,  // Ensure you don't automatically sync in production
  logging: true,      // Enable logging for debugging
  entities: [Movies],  // Entities for the movies database
});