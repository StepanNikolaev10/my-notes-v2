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
  AuthControllerLoginData,
  AuthControllerLogoutData,
  AuthControllerRefreshData,
  AuthControllerRegisterData,
  LoginDto,
  RegisterDto,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRegister
   * @summary Регистрация в системе
   * @request POST:/auth/registration
   * @response `201` `AuthControllerRegisterData`
   */
  authControllerRegister = (data: RegisterDto, params: RequestParams = {}) =>
    this.http.request<AuthControllerRegisterData, any>({
      path: `/auth/registration`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogin
   * @summary Вход в систему
   * @request POST:/auth/login
   * @response `201` `AuthControllerLoginData`
   */
  authControllerLogin = (data: LoginDto, params: RequestParams = {}) =>
    this.http.request<AuthControllerLoginData, any>({
      path: `/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogout
   * @summary Выход из системы
   * @request POST:/auth/logout
   * @response `201` `AuthControllerLogoutData`
   */
  authControllerLogout = (params: RequestParams = {}) =>
    this.http.request<AuthControllerLogoutData, any>({
      path: `/auth/logout`,
      method: "POST",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerRefresh
   * @summary Обновление токенов авторизации
   * @request POST:/auth/refresh
   * @response `201` `AuthControllerRefreshData`
   */
  authControllerRefresh = (params: RequestParams = {}) =>
    this.http.request<AuthControllerRefreshData, any>({
      path: `/auth/refresh`,
      method: "POST",
      format: "json",
      ...params,
    });
}
