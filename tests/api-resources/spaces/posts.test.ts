// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const client = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.spaces.posts.create({ path_space_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.spaces.posts.create({
      path_space_id: 0,
      body: 'body',
      cover_image: 'cover_image',
      is_comments_enabled: true,
      is_liking_enabled: true,
      name: 'name',
      slug: 'slug',
      body_space_id: 0,
      tiptap_body: {
        body: {
          content: [
            { attrs: {}, marks: [{}, {}, {}], text: 'text', type: 'type' },
            { attrs: {}, marks: [{}, {}, {}], text: 'text', type: 'type' },
            { attrs: {}, marks: [{}, {}, {}], text: 'text', type: 'type' },
          ],
          type: 'type',
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.spaces.posts.retrieve(0, 0);
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
    await expect(client.spaces.posts.retrieve(0, 0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      HeadlessClientSDK.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.spaces.posts.list(0);
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
    await expect(client.spaces.posts.list(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      HeadlessClientSDK.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.spaces.posts.list(0, { page: 0, per_page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.spaces.posts.delete(0, 0);
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
    await expect(client.spaces.posts.delete(0, 0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      HeadlessClientSDK.NotFoundError,
    );
  });
});
