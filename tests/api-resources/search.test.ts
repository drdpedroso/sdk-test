// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK, { toFile } from 'headless-client-sdk';
import { Response } from 'node-fetch';

const client = new HeadlessClientSDK({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource search', () => {
  test('list: only required params', async () => {
    const responsePromise = client.search.list({ search_text: 'search_text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.search.list({ search_text: 'search_text', page: 0, per_page: 0 });
  });
});
