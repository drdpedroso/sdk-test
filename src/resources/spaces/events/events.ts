// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RecurringEventsAPI from './recurring-events';

export class Events extends APIResource {
  recurringEvents: RecurringEventsAPI.RecurringEvents = new RecurringEventsAPI.RecurringEvents(this._client);
}

export namespace Events {
  export import RecurringEvents = RecurringEventsAPI.RecurringEvents;
  export import RecurringEventRsvpResponse = RecurringEventsAPI.RecurringEventRsvpResponse;
  export import RecurringEventListParams = RecurringEventsAPI.RecurringEventListParams;
  export import RecurringEventRsvpParams = RecurringEventsAPI.RecurringEventRsvpParams;
}
