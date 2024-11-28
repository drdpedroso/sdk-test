// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EventAttendeesAPI from './event-attendees';
import { EventAttendee, EventAttendeeListParams, EventAttendees } from './event-attendees';

export class Events extends APIResource {
  eventAttendees: EventAttendeesAPI.EventAttendees = new EventAttendeesAPI.EventAttendees(this._client);
}

export declare namespace Events {
  export {
    type EventAttendees as EventAttendees,
    type EventAttendee as EventAttendee,
    type EventAttendeeListParams as EventAttendeeListParams,
  };
}
