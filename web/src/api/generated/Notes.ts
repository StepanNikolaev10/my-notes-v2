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

import {
  AddNoteDto,
  ArchiveNotesDto,
  DeleteNotesDto,
  NotesControllerAddNoteData,
  NotesControllerArchiveNotesData,
  NotesControllerDeleteNotesData,
  NotesControllerGetNotesData,
  NotesControllerGetNotesParams,
  NotesControllerRestoreTrashedNotesData,
  NotesControllerTrashNotesData,
  NotesControllerUnarchiveNotesData,
  NotesControllerUpdateNoteContentData,
  NotesControllerUpdateNotePositionData,
  NotesControllerUpdateNotesColorData,
  RestoreTrashedNotesDto,
  TrashNotesDto,
  UnarchiveNotesDto,
  UpdateNoteContentDto,
  UpdateNotePositionDto,
  UpdateNotesColorDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notes<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerAddNote
   * @summary Добавить заметку
   * @request POST:/notes/add
   * @secure
   * @response `201` `NotesControllerAddNoteData`
   */
  notesControllerAddNote = (data: AddNoteDto, params: RequestParams = {}) =>
    this.http.request<NotesControllerAddNoteData, any>({
      path: `/notes/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerArchiveNotes
   * @summary Архивировать заметку
   * @request POST:/notes/archive
   * @secure
   * @response `201` `NotesControllerArchiveNotesData`
   */
  notesControllerArchiveNotes = (
    data: ArchiveNotesDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerArchiveNotesData, any>({
      path: `/notes/archive`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUnarchiveNotes
   * @summary Разрхивировать заметку
   * @request POST:/notes/unarchive
   * @secure
   * @response `201` `NotesControllerUnarchiveNotesData`
   */
  notesControllerUnarchiveNotes = (
    data: UnarchiveNotesDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUnarchiveNotesData, any>({
      path: `/notes/unarchive`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerTrashNotes
   * @summary Поместить заметку корзину
   * @request POST:/notes/trash
   * @secure
   * @response `201` `NotesControllerTrashNotesData`
   */
  notesControllerTrashNotes = (
    data: TrashNotesDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerTrashNotesData, any>({
      path: `/notes/trash`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerRestoreTrashedNotes
   * @summary Убрать заметку из корзины
   * @request POST:/notes/restore-trashed
   * @secure
   * @response `201` `NotesControllerRestoreTrashedNotesData`
   */
  notesControllerRestoreTrashedNotes = (
    data: RestoreTrashedNotesDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerRestoreTrashedNotesData, any>({
      path: `/notes/restore-trashed`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerDeleteNotes
   * @summary Удалить замтеку
   * @request DELETE:/notes/delete
   * @secure
   * @response `200` `NotesControllerDeleteNotesData`
   */
  notesControllerDeleteNotes = (
    data: DeleteNotesDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerDeleteNotesData, any>({
      path: `/notes/delete`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdateNotesColor
   * @summary Обновить цвет заметки
   * @request POST:/notes/update-color
   * @secure
   * @response `201` `NotesControllerUpdateNotesColorData`
   */
  notesControllerUpdateNotesColor = (
    data: UpdateNotesColorDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdateNotesColorData, any>({
      path: `/notes/update-color`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdateNoteContent
   * @summary Обновить контент заметки (заголовок, текст)
   * @request POST:/notes/update-content
   * @secure
   * @response `201` `NotesControllerUpdateNoteContentData`
   */
  notesControllerUpdateNoteContent = (
    data: UpdateNoteContentDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdateNoteContentData, any>({
      path: `/notes/update-content`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerUpdateNotePosition
   * @summary Изменить позицию заметки
   * @request POST:/notes/update-position
   * @secure
   * @response `201` `NotesControllerUpdateNotePositionData`
   */
  notesControllerUpdateNotePosition = (
    data: UpdateNotePositionDto,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerUpdateNotePositionData, any>({
      path: `/notes/update-position`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Notes
   * @name NotesControllerGetNotes
   * @summary Получить заметки
   * @request GET:/notes
   * @secure
   * @response `200` `NotesControllerGetNotesData`
   */
  notesControllerGetNotes = (
    query: NotesControllerGetNotesParams,
    params: RequestParams = {},
  ) =>
    this.http.request<NotesControllerGetNotesData, any>({
      path: `/notes`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
