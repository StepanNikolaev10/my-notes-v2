import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { UserEntity } from 'src/users/user.entity';
import { NoteEntity } from './note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [NotesController],
  providers: [NotesService],
  imports: [
    TypeOrmModule.forFeature([UserEntity, NoteEntity])
  ],
})
export class NotesModule {}
