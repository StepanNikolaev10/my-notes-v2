import { HttpClient } from './generated/http-client';

export const httpClient = new HttpClient({
  baseURL: 'http://localhost:3000',
  // Другие параметры по необходимости
});
