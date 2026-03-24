import type { Note, NoteColorsKeys, User } from "@my-notes/types";

type NoteIds = readonly Note['id'][];

export interface AddNoteArgs {
  readonly title: Note['title'];
  readonly mainText: Note['mainText'];
  readonly authorId: User['id'];
}

export interface ArchiveNotesArgs {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface UnarchiveNotesArgs {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface TrashNotesArgs {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface RestoreTrashedNotesArgs {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface DeleteNotesArgs {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface UpdateNotesColorArgs {
  readonly noteIds: NoteIds;
  readonly updatedColorKey: NoteColorsKeys;
  readonly authorId: User['id'];
}

export interface UpdateNoteContentArgs {
  readonly noteId: Note['id'];
  readonly updatedTitle: Note['title'];
  readonly updatedMainText: Note['mainText'];
  readonly authorId: User['id'];
}

  // changeNotePosition: {
    
  // };
