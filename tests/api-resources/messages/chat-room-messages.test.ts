// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const headlessClientSDK = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chatRoomMessages', () => {
  test('create', async () => {
    const responsePromise = headlessClientSDK.messages.chatRoomMessages.create('chat_room_uuid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.messages.chatRoomMessages.create('chat_room_uuid', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.messages.chatRoomMessages.create(
        'chat_room_uuid',
        { body: 'body', rich_text_body: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('retrieve', async () => {
    const responsePromise = headlessClientSDK.messages.chatRoomMessages.retrieve('chat_room_uuid', 'id');
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
    await expect(
      headlessClientSDK.messages.chatRoomMessages.retrieve('chat_room_uuid', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = headlessClientSDK.messages.chatRoomMessages.update('chat_room_uuid', 'id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.messages.chatRoomMessages.update('chat_room_uuid', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.messages.chatRoomMessages.update(
        'chat_room_uuid',
        'id',
        { body: 'body', rich_text_body: {} },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = headlessClientSDK.messages.chatRoomMessages.list('chat_room_uuid');
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
    await expect(
      headlessClientSDK.messages.chatRoomMessages.list('chat_room_uuid', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.messages.chatRoomMessages.list(
        'chat_room_uuid',
        { page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = headlessClientSDK.messages.chatRoomMessages.delete('chat_room_uuid', 'id');
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
    await expect(
      headlessClientSDK.messages.chatRoomMessages.delete('chat_room_uuid', 'id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });
});
