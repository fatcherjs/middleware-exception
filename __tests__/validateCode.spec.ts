import { fatcher } from 'fatcher';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';
import { exception } from '../src';

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

describe('Validate Code', () => {
  it('Request successfully with code 10001', async () => {
    const res = await fatcher('https://foo.bar/get?code=10001', {
      validateCode: code => code === 10001,
      middlewares: [exception],
    });

    expect(res.status).toBe(10001);
  });
});
