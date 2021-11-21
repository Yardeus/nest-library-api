import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { IsString, MaxLength } from 'class-validator';

@Entity()
export class Book {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({type: "varchar", length: 100, nullable: false})
  title: string;

  @ApiProperty()
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({type: "varchar", length: 100, nullable: false})
  author: string;

  @ApiProperty()
  @Column({default : false})
  isTaken: boolean;

  @ApiProperty()

  @ManyToOne(type => User, user => user.id)
  user: number;

  @ApiProperty()
  @MaxLength(100, { always: true })
  @Column({type: "varchar", length: 100, nullable: false})
  pages: number;

}