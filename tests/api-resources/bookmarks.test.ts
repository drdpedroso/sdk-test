// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK, { toFile } from 'headless-client-sdk';
import { Response } from 'node-fetch';

const client = new HeadlessClientSDK({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource bookmarks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.bookmarks.create({ bookmark_type: 'post', record_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.bookmarks.create({ bookmark_type: 'post', record_id: 0 });
  });

  test('list', async () => {
    const responsePromise = client.bookmarks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.bookmarks.list({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.bookmarks.list({ bookmark_type: 'post', page: 0, per_page: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.bookmarks.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.bookmarks.delete(0, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });
});
