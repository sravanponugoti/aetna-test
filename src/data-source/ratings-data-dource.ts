import { Ratings } from "src/entities/ratings.entity";
import { DataSource } from "typeorm";

export const RatingsDataSource = new DataSource({
  type: 'sqlite',
  database: 'db/ratings.db', // Path to your movies.db file
  synchronize: true,  // Ensure you don't automatically sync in production
  logging: true,      // Enable logging for debugging
  entities: [Ratings],  // Entities for the movies database
});