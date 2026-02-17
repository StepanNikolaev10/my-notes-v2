import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { User } from 'src/users/user.entity';
import { Note } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [
    TypeOrmModule.forFeature([User, Note])
  ],
})
export class NotesModule {}
