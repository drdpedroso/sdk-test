// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import HeadlessClientSDK from 'headless-client-sdk';
import { Response } from 'node-fetch';

const headlessClientSDK = new HeadlessClientSDK({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flaggedContents', () => {
  test('create: only required params', async () => {
    const responsePromise = headlessClientSDK.flaggedContents.create({
      flagged_content: {
        flagged_contentable_id: 0,
        flagged_contentable_type: 'flagged_contentable_type',
        reported_reason_type: 'reported_reason_type',
        reported_reason_body: 'harassment',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await headlessClientSDK.flaggedContents.create({
      flagged_content: {
        flagged_contentable_id: 0,
        flagged_contentable_type: 'flagged_contentable_type',
        reported_reason_type: 'reported_reason_type',
        reported_reason_body: 'harassment',
      },
    });
  });
});
