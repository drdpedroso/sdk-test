// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EventAttendeesAPI from './event-attendees';

export class EventAttendees extends APIResource {
  /**
   * Create an event attendee
   */
  create(eventId: number, options?: Core.RequestOptions): Core.APIPromise<EventAttendee> {
    return this._client.post(`/api/headless/v1/events/${eventId}/event_attendees`, options);
  }

  /**
   * List event attendees
   */
  list(
    eventId: number,
    query?: EventAttendeeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventAttendees>;
  list(eventId: number, options?: Core.RequestOptions): Core.APIPromise<EventAttendees>;
  list(
    eventId: number,
    query: EventAttendeeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventAttendees> {
    if (isRequestOptions(query)) {
      return this.list(eventId, {}, query);
    }
    return this._client.get(`/api/headless/v1/events/${eventId}/event_attendees`, { query, ...options });
  }

  /**
   * Destroy an event attendee
   */
  delete(eventId: number, options?: Core.RequestOptions): Core.APIPromise<EventAttendee> {
    return this._client.delete(`/api/headless/v1/events/${eventId}/event_attendees`, options);
  }
}

export interface EventAttendee {
  id?: number;

  avatar_url?: string | null;

  community_member_id?: number;

  name?: string;

  rsvp_date?: string;

  rsvp_status?: string;
}

export interface EventAttendees {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<EventAttendee>;
}

export interface EventAttendeeListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export namespace EventAttendees {
  export import EventAttendee = EventAttendeesAPI.EventAttendee;
  export import EventAttendees = EventAttendeesAPI.EventAttendees;
  export import EventAttendeeListParams = EventAttendeesAPI.EventAttendeeListParams;
}
