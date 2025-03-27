import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Movies } from './movies.entity';

@Entity()
export class Ratings {
  @PrimaryGeneratedColumn()
  ratingId: number;

  @Column()
  userId: number;

  @Column()
  movieId: number;

  @Column()
  rating: string;

  @Column()
  timestamp: number;

}