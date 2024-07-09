// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const headlessClientSDK = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource notifications', () => {
  test('list', async () => {
    const responsePromise = headlessClientSDK.notifications.list();
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
    await expect(headlessClientSDK.notifications.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      HeadlessClientSDK.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.list(
        { page: 0, per_page: 0, sort: 'oldest' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = headlessClientSDK.notifications.delete(0);
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
      headlessClientSDK.notifications.delete(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = headlessClientSDK.notifications.archive(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.archive(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('markAllAsRead', async () => {
    const responsePromise = headlessClientSDK.notifications.markAllAsRead();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('markAllAsRead: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.markAllAsRead({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('markAllAsRead: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.markAllAsRead(
        { notification_type: 'string', parent_notifiable: { type: 'string', id: 1 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('markAsRead', async () => {
    const responsePromise = headlessClientSDK.notifications.markAsRead(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('markAsRead: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.markAsRead(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('newNotificationsCount', async () => {
    const responsePromise = headlessClientSDK.notifications.newNotificationsCount();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('newNotificationsCount: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.newNotificationsCount({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('resetNewNotificationsCount', async () => {
    const responsePromise = headlessClientSDK.notifications.resetNewNotificationsCount();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('resetNewNotificationsCount: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.notifications.resetNewNotificationsCount({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });
});
