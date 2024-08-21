// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { EventAttendees } from './event-attendees';
import * as EventAttendeesAPI from './event-attendees';

export class Events extends APIResource {
  eventAttendees: EventAttendeesAPI.EventAttendees = new EventAttendeesAPI.EventAttendees(this._client);
}

export namespace Events {
  export import EventAttendees = EventAttendeesAPI.EventAttendees;
  export import EventAttendee = EventAttendeesAPI.EventAttendee;
  export import EventAttendeeListParams = EventAttendeesAPI.EventAttendeeListParams;
}
