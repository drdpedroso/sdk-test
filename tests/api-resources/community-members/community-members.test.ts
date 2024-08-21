// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK, { toFile } from 'headless-client-sdk';
import { Response } from 'node-fetch';

const client = new HeadlessClientSDK({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource communityMembers', () => {
  test('retrieve', async () => {
    const responsePromise = client.communityMembers.retrieve();
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
    await expect(client.communityMembers.retrieve({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.communityMembers.list();
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
    await expect(client.communityMembers.list({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.communityMembers.list({ page: 0, per_page: 0, search_after: [0, 0, 0], search_text: 'search_text', sort: 'alphabetical', space_id: 0 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('deactivate', async () => {
    const responsePromise = client.communityMembers.deactivate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deactivate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.communityMembers.deactivate({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(HeadlessClientSDK.NotFoundError);
  });
});
