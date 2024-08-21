// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK, { toFile } from 'headless-client-sdk';
import { Response } from 'node-fetch';

const client = new HeadlessClientSDK({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource homePage', () => {
  test('retrieve', async () => {
    const responsePromise = client.homePage.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.homePage.retrieve({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.homePage.retrieve({ page: 0, per_page: 0, sort: 'latest' }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });
});
