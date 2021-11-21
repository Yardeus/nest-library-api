import {Controller} from '@nestjs/common';
import {ApiTags } from '@nestjs/swagger';
import { Crud, CrudController} from '@nestjsx/crud';
import { Book } from '../entities/book.entity';
import { BookService } from '../services/book.service';

@Crud({
  model: {
    type: Book,
  }
})

@ApiTags('book')
@Controller('api/book')
export class BookController implements CrudController<Book> {

  constructor(public readonly service: BookService) {}
}
