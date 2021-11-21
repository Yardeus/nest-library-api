import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty()
  login: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  subscription: boolean;
}
export class UpdateDto {
  @ApiProperty()
  login: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  subscription: boolean;
}
export class UpdateBookDto {

  @ApiProperty()
  isTaken: boolean;
}

export class PatchDto {

  @ApiProperty()
  subscription: boolean;
}