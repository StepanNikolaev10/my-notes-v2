export interface SessionsServiceResults {
  createSession: Promise<void>;
  updateSession: 'NOT_FOUND' | 'ALREADY_UPDATED' | 'OK';
}