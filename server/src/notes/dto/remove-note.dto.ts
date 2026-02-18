import type { INote } from '../../../../shared/interfaces/note.interface';
import { IUser } from '../../../../shared/interfaces/user.interface';

export class RemoveNoteDto {
  readonly id: INote['id'];
  readonly authorId: IUser['id']
}