import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // тип базы данных
      host: 'postgres', // хост
      port: 5432, // стандартный порт PostgreSQL
      username: 'postgres', // ваше имя пользователя в БД
      password: 'password', // пароль от БД
      database: 'postgres-db', // имя БД
      autoLoadEntities: true, // автоматически подключает все entities
      synchronize: true, // авто-создание таблиц по entity
    }),
    AuthModule,
    NotesModule
  ] 
})
export class AppModule {}
