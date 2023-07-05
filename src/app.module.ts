import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';

// The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
@Module({
  imports: [CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
