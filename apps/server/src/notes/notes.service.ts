import { Injectable, NotFoundException } from '@nestjs/common';
import { AddNoteDto } from './dto/req/add-note.dto';
import { RemoveNoteDto } from './dto/req/remove-note.dto';
import { NoteEntity } from './note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import type { NotesServiceArgs } from './types/notes-service-args.interface';
import type { NotesServiceResults } from './types/notes-service-results.interface';

@Injectable()
export class NotesService {

  @InjectRepository(NoteEntity) // даёт репозиторий(пульт управления на таблицей) для свойства ниже, ...
  // ...свойство не будет undefined из за присваивания значения декоратором.
  private noteRepository: Repository<NoteEntity>  // значения падает в userRepository,  ...
  // ...но для удобной работы используется тип Repository с добавлением методов автокомлитом и дженерик с типами сущности Note

  async addNote(args: NotesServiceArgs['addNote']): Promise<NotesServiceResults['addNote']> { // за счёт noteRepository создаётся экземпляр класса сущности Note, значения из dto подставляются в нужные места.
    const note = this.noteRepository.create(args);
    await this.noteRepository.save(note);
    return note;
  }

  // async removeNote(data: RemoveNoteDto): Promise<void> {
  //   const result = await this.noteRepository.delete({
  //     id: data.id,
  //     authorId: dto.authorId
  //   });
    
  //   if (result.affected === 0) {
  //     throw new NotFoundException(`Note with ID ${dto.id} not found or access denied`);
  //   }
  // }

}
