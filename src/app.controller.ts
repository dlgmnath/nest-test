import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { ConfigService } from '@nestjs/config';
import { Env } from '../env.models';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
    private readonly configService: ConfigService<Env>,
  ) {}

  @Get()
  getHello(): string {
    const mainVar = this.configService.get<string>('main_var', { infer: true });
    console.log(mainVar); // Output: "test"
    return this.appService.getHello();
  }

  @Get('test')
  getTest() {
    return this.userService.findAll();
  }
}
