import { Injectable } from '@nestjs/common';
import { AddNoteDto } from './dto/add-note.dto';
import { RemoveNoteDto } from './dto/remove-note.dto';
import { Note } from './note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { IUser } from '../../../shared/interfaces/user.interface';

@Injectable()
export class NotesService {

  @InjectRepository(Note) // даёт репозиторий(пульт управления на таблицей) для свойства ниже, ...
  // ...свойство не будет undefined из за присваивания значения декоратором.
  private noteRepository: Repository<Note>  // значения падает в userRepository,  ...
  // ...но для удобной работы используется тип Repository с добавлением методов автокомлитом и дженерик с типами сущности Note

  async addNote(dto: AddNoteDto, userId: IUser['id']) { // за счёт noteRepository создаётся экземпляр класса сущности Note, значения из dto подставляются в нужные места.
    const note = this.noteRepository.create({
      ...dto,
      authorId: userId,
    });
    await this.noteRepository.save(note);
    return note;
  }

  removeNote(dto: RemoveNoteDto) {
    
  }

}
