import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from '../env.models';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService<Env>) {}

  getHello(): string {
    const mainVar = this.configService.get<string>('main_var', { infer: true });

    return `holi :3  ${mainVar}`;
  }
}
