/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface RegisterDto {
  /** @format email */
  email: string;
  /** @maxLength 30 */
  username: string;
  /**
   * @minLength 6
   * @maxLength 50
   */
  password: string;
}

export interface LoginDto {
  /** @format email */
  email: string;
  password: string;
}

export interface AddNoteDto {
  /** @maxLength 200 */
  title: string;
  /** @maxLength 10000 */
  text: string;
}

export interface ArchiveNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface UnarchiveNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface TrashNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
  currentStatus: "default" | "archived";
}

export interface RestoreTrashedNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface DeleteNotesDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
}

export interface UpdateNotesColorDto {
  /**
   * @minItems 1
   * @uniqueItems true
   */
  noteIds: string[];
  updatedColorKey:
    | "FIRST"
    | "SECOND"
    | "THIRD"
    | "FOURTH"
    | "FIFTH"
    | "SIXTH"
    | "SEVENTH"
    | "EIGHTH"
    | "NINTH"
    | "TENTH"
    | "ELEVENTH"
    | "TWELVEFTH";
}

export interface UpdateNoteContentDto {
  noteId: string;
  /** @maxLength 200 */
  updatedTitle: string;
  /** @maxLength 10000 */
  updatedText: string;
}

export interface UpdateNotePositionDto {
  noteId: string;
  updatedPositionNumber: number;
}

export type Object = object;

export type AuthControllerRegisterData = string;

export type AuthControllerLoginData = string;

export type AuthControllerLogoutData = any;

export type AuthControllerRefreshData = string;

export type NotesControllerAddNoteData = any;

export type NotesControllerArchiveNotesData = any;

export type NotesControllerUnarchiveNotesData = any;

export type NotesControllerTrashNotesData = any;

export type NotesControllerRestoreTrashedNotesData = any;

export type NotesControllerDeleteNotesData = any;

export type NotesControllerUpdateNotesColorData = any;

export type NotesControllerUpdateNoteContentData = any;

export type NotesControllerUpdateNotePositionData = any;

export interface NotesControllerGetNotesParams {
  status: Object;
  /** @default "custom" */
  sort?: "custom" | "created_at" | "updated_at";
  search?: string;
  /**
   * @min 1
   * @max 50
   * @default 20
   */
  limit?: number;
  /** @format uuid */
  last_id?: string;
}

export type NotesControllerGetNotesData = any;
