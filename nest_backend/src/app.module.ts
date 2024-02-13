import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueModule } from './issue/issue.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [IssueModule, ConfigModule.forRoot() ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
