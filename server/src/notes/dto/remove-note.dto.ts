import type { INote } from '../../../../shared/interfaces/note.interface';

export class RemoveNoteDto {
  readonly id: INote['id'];
}