import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueModule } from './issue/issue.module';
import { LabelModule } from './label/label.module';
import { LabelService } from './label/label.service';

@Module({
  imports: [IssueModule, LabelModule],
  controllers: [AppController],
  providers: [AppService, LabelService],
})
export class AppModule {}
