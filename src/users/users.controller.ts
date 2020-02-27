import { Body, Controller, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiConsumes,
} from '@nestjs/swagger';
import { CreateUser } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {

  @Post()
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiConsumes('multipart/form-data')
  async createUser(@Body() user: CreateUser, @UploadedFile() avatar: any) {
      console.log(user);
      console.log(avatar);
  }

}