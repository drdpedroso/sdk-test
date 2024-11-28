// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RecurringEventsAPI from './recurring-events';
import {
  RecurringEventListParams,
  RecurringEventRsvpParams,
  RecurringEventRsvpResponse,
  RecurringEvents,
} from './recurring-events';

export class Events extends APIResource {
  recurringEvents: RecurringEventsAPI.RecurringEvents = new RecurringEventsAPI.RecurringEvents(this._client);
}

export declare namespace Events {
  export {
    type RecurringEvents as RecurringEvents,
    type RecurringEventRsvpResponse as RecurringEventRsvpResponse,
    type RecurringEventListParams as RecurringEventListParams,
    type RecurringEventRsvpParams as RecurringEventRsvpParams,
  };
}
