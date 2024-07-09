// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const headlessClientSDK = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource posts', () => {
  test('create: only required params', async () => {
    const responsePromise = headlessClientSDK.posts.create({ path_space_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await headlessClientSDK.posts.create({
      path_space_id: 0,
      gallery_attributes: {
        images_attributes: [
          { id: 0, signed_id: 'string', width: 0, height: 0 },
          { id: 0, signed_id: 'string', width: 0, height: 0 },
          { id: 0, signed_id: 'string', width: 0, height: 0 },
        ],
      },
      is_comments_enabled: true,
      is_liking_enabled: true,
      slug: 'string',
      body_space_id: 0,
      tiptap_body: {
        body: {
          type: 'string',
          content: [
            { type: 'string', text: 'string', marks: [{}, {}, {}], attrs: {} },
            { type: 'string', text: 'string', marks: [{}, {}, {}], attrs: {} },
            { type: 'string', text: 'string', marks: [{}, {}, {}], attrs: {} },
          ],
        },
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = headlessClientSDK.posts.update(0, { path_space_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await headlessClientSDK.posts.update(0, {
      path_space_id: 0,
      gallery_attributes: {
        images_attributes: [
          { id: 0, image: 'string', position: 0 },
          { id: 0, image: 'string', position: 0 },
          { id: 0, image: 'string', position: 0 },
        ],
      },
      is_comments_enabled: true,
      is_liking_enabled: true,
      slug: 'string',
      body_space_id: 0,
      tiptap_body: {
        body: {
          type: 'string',
          content: [
            { type: 'string', text: 'string', marks: [{}, {}, {}], attrs: {} },
            { type: 'string', text: 'string', marks: [{}, {}, {}], attrs: {} },
            { type: 'string', text: 'string', marks: [{}, {}, {}], attrs: {} },
          ],
        },
      },
    });
  });
});
