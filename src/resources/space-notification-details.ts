// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class SpaceNotificationDetails extends APIResource {
  /**
   * Get space notification details
   */
  list(
    query?: SpaceNotificationDetailListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpaceNotificationDetails>;
  list(options?: Core.RequestOptions): Core.APIPromise<SpaceNotificationDetails>;
  list(
    query: SpaceNotificationDetailListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpaceNotificationDetails> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/headless/v1/space_notification_details', { query, ...options });
  }
}

export type SpaceNotificationDetails = Array<SpaceNotificationDetails.SpaceNotificationDetailItem>;

export namespace SpaceNotificationDetails {
  export interface SpaceNotificationDetailItem {
    id?: number;

    unread_content_count?: number;

    unread_notifications_count?: number;
  }
}

export interface SpaceNotificationDetailListParams {
  /**
   * Comma separated space ids
   */
  space_ids?: string;
}

export declare namespace SpaceNotificationDetails {
  export {
    type SpaceNotificationDetails as SpaceNotificationDetails,
    type SpaceNotificationDetailListParams as SpaceNotificationDetailListParams,
  };
}
