import { FatcherContext, FatcherResponse } from 'fatcher';

export class FatcherError extends Error {
  name = 'FatcherError';

  constructor(
    readonly context: FatcherContext,
    readonly response: FatcherResponse,
  ) {
    super(`[fatcher] Request fail with code ${response.status}`);
  }
}
