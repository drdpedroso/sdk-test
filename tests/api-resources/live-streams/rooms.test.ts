// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const client = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rooms', () => {
  test('create', async () => {
    const responsePromise = client.liveStreams.rooms.create();
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
    await expect(client.liveStreams.rooms.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      HeadlessClientSDK.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.liveStreams.rooms.create(
        {
          access_type: 'open',
          description: 'description',
          invited_entities_ids: {
            member_tags_ids: [0, 0, 0],
            members_ids: [0, 0, 0],
            space_groups_ids: [0, 0, 0],
            spaces_ids: [0, 0, 0],
          },
          limit_url_sharing: true,
          mute_on_join: true,
          name: 'name',
          recording_enabled: true,
          room_type: 'stream',
          slug: 'slug',
          view_type: 'speaker_view',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });
});
