import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,              // Отрезает всё, что не описано в DTO
    forbidNonWhitelisted: true,   // Вместо отрезания выбрасывает ошибку 400
    transform: true,              // Превращает типы (строки в числа и т.д.)
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
