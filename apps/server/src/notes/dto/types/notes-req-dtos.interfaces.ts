import type { Note, NoteColorsKeys } from "@my-notes/types";

type NoteIds = readonly Note['id'][];

export interface IAddNoteDto {
  readonly title: Note['title'];
  readonly mainText: Note['mainText'];
}

export interface IArchiveNotesDto {
  readonly noteIds: NoteIds;
}

export interface IUnarchiveNotesDto {
  readonly noteIds: NoteIds;
}

export interface ITrashNotesDto {
  readonly noteIds: NoteIds;
}

export interface IRestoreTrashedNotesDto {
  readonly noteIds: NoteIds;
}

export interface IDeleteNotesDto {
  readonly noteIds: NoteIds;
}

export interface IUpdateNotesColorDto {
  readonly noteIds: NoteIds;
  readonly changedColorKey: NoteColorsKeys;
}

export interface IChangeNoteContentDto {
  readonly noteId: Note['id'];
  readonly changedTitle: Note['title'];
  readonly changedMainText: Note['mainText'];
}
