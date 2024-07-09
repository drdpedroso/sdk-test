// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const headlessClientSDK = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profile', () => {
  test('update', async () => {
    const responsePromise = headlessClientSDK.signup.profile.update();
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
      headlessClientSDK.signup.profile.update({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      headlessClientSDK.signup.profile.update(
        {
          community_member: {
            name: 'string',
            avatar: 'string',
            headline: 'string',
            time_zone: 'string',
            preferences: {
              messaging_enabled: true,
              visible_in_member_directory: true,
              make_my_email_public: true,
            },
            community_member_profile_fields_attributes: [
              {
                id: 0,
                profile_field_id: 0,
                text: 'string',
                textarea: 'string',
                community_member_choices_attributes: [
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                ],
              },
              {
                id: 0,
                profile_field_id: 0,
                text: 'string',
                textarea: 'string',
                community_member_choices_attributes: [
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                ],
              },
              {
                id: 0,
                profile_field_id: 0,
                text: 'string',
                textarea: 'string',
                community_member_choices_attributes: [
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                  { id: 0, profile_field_choice_id: 0, _destroy: true },
                ],
              },
            ],
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(HeadlessClientSDK.NotFoundError);
  });
});
