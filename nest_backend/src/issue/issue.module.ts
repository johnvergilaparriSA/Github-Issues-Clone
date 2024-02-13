import { Module } from '@nestjs/common';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [IssueService],
  controllers: [IssueController]
})
export class IssueModule {}
