import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellingModule } from './adoption/selling.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SellingModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
