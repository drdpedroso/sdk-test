// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as FlaggedContentsAPI from './flagged-contents';

export class FlaggedContents extends APIResource {
  /**
   * Flag content
   */
  create(
    body: FlaggedContentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlaggedContentCreateResponse> {
    return this._client.post('/api/headless/v1/flagged_contents', { body, ...options });
  }
}

export interface FlaggedContentCreateResponse {
  message?: string;
}

export interface FlaggedContentCreateParams {
  flagged_content: FlaggedContentCreateParams.FlaggedContent;
}

export namespace FlaggedContentCreateParams {
  export interface FlaggedContent {
    flagged_contentable_id: number;

    flagged_contentable_type: string;

    reported_reason_body: 'harassment' | 'spam' | 'incorrect_location' | 'against_guidelines' | 'other';

    reported_reason_type: string;
  }
}

export namespace FlaggedContents {
  export import FlaggedContentCreateResponse = FlaggedContentsAPI.FlaggedContentCreateResponse;
  export import FlaggedContentCreateParams = FlaggedContentsAPI.FlaggedContentCreateParams;
}
