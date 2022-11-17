import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiCovidModule } from './api_covid/api_covid.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ApiCovidModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
