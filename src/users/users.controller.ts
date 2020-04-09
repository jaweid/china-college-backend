import { Body, Controller, Delete, Get, Param, Post ,Put} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() createUserDto: CreateUserDto) :Promise<void>{
    return this.usersService.update(id,createUserDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}