import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, OneToMany, JoinColumn } from 'typeorm';
import { Transform } from 'class-transformer';
import { Ratings } from './ratings.entity';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  movieId: number;

  @Column()
  imdbId: string;

  @Column()
  title: string;

  @Column('text')
  genres: any;

// Hook to serialize genres back into a string before saving to DB
//   @BeforeInsert()
//   @BeforeUpdate()
//   transformGenresToString() {
//     if (this.genres && Array.isArray(this.genres)) {
//       // Serialize the object to a JSON string before saving to DB
//       this.genres = JSON.stringify(this.genres);
//     }
//   }

  @Column({nullable: true})
  overview: string;

  @Column({nullable: true})
  productionCompanies: string;

  @Column({nullable: true})
  releaseDate: string;

  @Transform(({ value }) => {
    return '$' + value;
  }, { toClassOnly: true })
  @Column({nullable: true})
  budget: string;

  @Column({nullable: true})
  revenue: number;

  @Column({nullable: true})
  runtime: string;

  @Column({nullable: true})
  language: string;

  @Column({nullable: true})
  status: string;

}