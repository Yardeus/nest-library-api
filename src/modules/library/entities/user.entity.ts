import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Book } from './book.entity';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryColumn()
  @OneToMany(type => Book, book => book.user)
  @JoinColumn({name: "id_user"})
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  login: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  surname: string;

  @ApiProperty()
  @Column({ default: false })
  subscription: boolean;
}