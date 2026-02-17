import type { INote } from '../../../../shared/interfaces/note.interface';

export class AddNoteDto {
  readonly title: INote['title'];
  readonly mainText: INote['mainText'];
}