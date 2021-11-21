import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryModule } from './modules/library/library.module';

@Module({
  imports: [TypeOrmModule.forRoot(), LibraryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
