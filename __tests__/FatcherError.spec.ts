import { fatcher } from 'fatcher';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { exception, isFatcherError } from '../src';
const server = setupServer(
  http.get('https://foo.bar/get', ({ request }) => {
    const [, queryString] = request.url.split('?');
    const params = new URLSearchParams(queryString);

    return HttpResponse.json({}, { status: Number(params.get('code'))! });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Fatcher Error Instance', () => {
  it('Normal Fetch is successful in out of 200-299', async () => {
    const res = await fatcher('https://foo.bar/get?code=500');
    expect(res.status).toBe(500);
  });

  it('Receive a fatcher error when response code is not 2xx', async () => {
    try {
      await fatcher('https://foo.bar/get?code=500', { middlewares: [exception] });
    } catch (error) {
      if (isFatcherError(error)) {
        expect(error.snapshot.response.status).toBe(500);
      }
    }
  });

  it('successfully fetch with code 200', async () => {
    const response = await fatcher('https://foo.bar/get?code=200');
    expect(response.status).toBe(200);
  });
});
