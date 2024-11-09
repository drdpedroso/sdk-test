// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class RecurringEvents extends APIResource {
  /**
   * List recurring events
   */
  list(
    spaceId: number,
    eventId: number,
    query?: RecurringEventListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecurringEvents>;
  list(spaceId: number, eventId: number, options?: Core.RequestOptions): Core.APIPromise<RecurringEvents>;
  list(
    spaceId: number,
    eventId: number,
    query: RecurringEventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecurringEvents> {
    if (isRequestOptions(query)) {
      return this.list(spaceId, eventId, {}, query);
    }
    return this._client.get(`/api/headless/v1/spaces/${spaceId}/events/${eventId}/recurring_events`, {
      query,
      ...options,
    });
  }

  /**
   * Update recurring event RSVP for the provided event ids
   */
  rsvp(
    spaceId: number,
    eventId: number,
    body: RecurringEventRsvpParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RecurringEventRsvpResponse> {
    return this._client.put(`/api/headless/v1/spaces/${spaceId}/events/${eventId}/recurring_events/rsvp`, {
      body,
      ...options,
    });
  }
}

export interface RecurringEvents {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<RecurringEvents.Record>;
}

export namespace RecurringEvents {
  export interface Record {
    id?: number;

    ends_at?: string;

    name?: string;

    rsvp_count?: number;

    rsvp_limit?: number;

    rsvped_event?: boolean;

    start_date?: string;

    starts_at?: string;

    time_zone?: string;

    time_zone_abbreviations?: string;
  }
}

export interface RecurringEventRsvpResponse {
  message?: string;
}

export interface RecurringEventListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export interface RecurringEventRsvpParams {
  event_ids: Array<number>;
}

export declare namespace RecurringEvents {
  export {
    type RecurringEvents as RecurringEvents,
    type RecurringEventRsvpResponse as RecurringEventRsvpResponse,
    type RecurringEventListParams as RecurringEventListParams,
    type RecurringEventRsvpParams as RecurringEventRsvpParams,
  };
}
