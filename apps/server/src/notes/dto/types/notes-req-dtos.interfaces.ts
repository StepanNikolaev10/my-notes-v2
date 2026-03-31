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
  readonly updatedColorKey: NoteColorsKeys;
}

export interface IUpdateNoteContentDto {
  readonly noteId: Note['id'];
  readonly updatedTitle: Note['title'];
  readonly updatedMainText: Note['mainText'];
}

export interface IUpdateNotePositionDto {
  readonly noteId: Note['id'];
  readonly updatedPositionNumber: Note['positionNumber'];
}