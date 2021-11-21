import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';
import { Book } from './entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Book])],
  controllers: [UserController,BookController],
  providers: [UserService,BookService],
})
export class LibraryModule {}
