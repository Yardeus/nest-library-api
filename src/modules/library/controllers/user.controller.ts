import {Controller} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from '../entities/user.entity';

@Crud({
  model: {
    type: User,
  }
})

@ApiTags('user')
@Controller('api/user')
export class UserController implements CrudController<User> {

  constructor(public readonly service: UserService) {}


}
