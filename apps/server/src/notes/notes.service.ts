import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteEntity } from './note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { AddNoteArgs, ArchiveNotesArgs, DeleteNotesArgs, RestoreTrashedNotesArgs, TrashNotesArgs, UnarchiveNotesArgs, UpdateNoteContentArgs, UpdateNotesColorArgs } from './types/notes-service-args.interfaces';
import { AddNoteResult, UpdateNoteContentResult, UpdateNotesColorResult } from './types/notes-service-results.interfaces';


@Injectable()
export class NotesService {

  @InjectRepository(NoteEntity) // даёт репозиторий(пульт управления на таблицей) для свойства ниже, ...
  // ...свойство не будет undefined из за присваивания значения декоратором.
  private noteRepository: Repository<NoteEntity>  // значения падает в userRepository,  ...
  // ...но для удобной работы используется тип Repository с добавлением методов автокомлитом и дженерик с типами сущности Note

  async addNote(args: AddNoteArgs): Promise<AddNoteResult> { // за счёт noteRepository создаётся экземпляр класса сущности Note, значения из dto подставляются в нужные места.
    const note = this.noteRepository.create(args);
    await this.noteRepository.save(note);
    return { createdAt: note.createdAt, updatedAt: note.updatedAt }
  }

  async archiveNotes(args: ArchiveNotesArgs): Promise<void> {
    await this.noteRepository.update(
      { id: In(args.noteIds), authorId: args.authorId, isArchived: false, isTrashed: false },
      { isArchived: true }
    );
  }

  async unarchiveNotes(args: UnarchiveNotesArgs): Promise<void> {
    await this.noteRepository.update(
      { id: In(args.noteIds), authorId: args.authorId, isArchived: true, isTrashed: false },
      { isArchived: false }
    );
  }

  async trashNotes(args: TrashNotesArgs): Promise<void> {
    await this.noteRepository.update(
      { id: In(args.noteIds), authorId: args.authorId, isTrashed: false },
      { isArchived: false, isTrashed: true }
    );
  }

  async restoreTrashedNotes(args: RestoreTrashedNotesArgs): Promise<void> {
    await this.noteRepository.update(
      { id: In(args.noteIds), authorId: args.authorId, isTrashed: true },
      { isTrashed: false }
    );
  }

  async deleteNotes(args: DeleteNotesArgs): Promise<void> {
    await this.noteRepository.delete(
      { id: In(args.noteIds), authorId: args.authorId, isTrashed: true }
    );
  }

  async updateNotesColor(args: UpdateNotesColorArgs): Promise<UpdateNotesColorResult> {
    await this.noteRepository.update(
      { id: In(args.noteIds), authorId: args.authorId, isTrashed: false },
      { colorKey: args.updatedColorKey }
    )

    const updatedNotes = await this.noteRepository.find({
      where: {
        id: In(args.noteIds),
        authorId: args.authorId,
        isTrashed: false
      },
      select: ['id', 'updatedAt']
    });

    return {
      updatedNotesData: updatedNotes.map(note => ({
        noteId: note.id,
        updatedAt: note.updatedAt
      }))
    }
  }

  async updateNoteContent(args: UpdateNoteContentArgs): Promise<UpdateNoteContentResult> {
    await this.noteRepository.update(
      { id: args.noteId, authorId: args.authorId, isTrashed: false },
      { title: args.updatedTitle, mainText: args.updatedMainText }
    )

    const updatedNote = await this.noteRepository.findOne({
      where: { id: args.noteId, authorId: args.authorId },
      select: ['updatedAt']
    })

    if (!updatedNote) {
      throw new NotFoundException('The note was not found or is not editable for you');
    }

    return {
      updatedAt: updatedNote.updatedAt
    }
  }

}
