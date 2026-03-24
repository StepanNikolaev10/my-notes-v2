import type { Note, NoteColorsKeys, User } from "@my-notes/types";

type NoteIds = readonly Note['id'][];

export interface AddNote {
  readonly title: Note['title'];
  readonly mainText: Note['mainText'];
  readonly authorId: User['id'];
}

export interface ArchiveNotes {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface UnarchiveNotes {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface TrashNotes {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface RestoreTrashedNotes {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface DeleteNotes {
  readonly noteIds: NoteIds;
  readonly authorId: User['id'];
}

export interface ChangeNotesColor {
  readonly noteIds: NoteIds;
  readonly colorKey: NoteColorsKeys;
  readonly authorId: User['id'];
}

export interface ChangeNoteContent {
  readonly noteId: Note['id'];
  readonly updatedTitle: Note['title'];
  readonly updatedMainText: Note['mainText'];
}

  // changeNotePosition: {
    
  // };
