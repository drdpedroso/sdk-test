// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RoomsAPI from './rooms';
import { LiveRoom, RoomCreateParams, Rooms } from './rooms';

export class LiveStreams extends APIResource {
  rooms: RoomsAPI.Rooms = new RoomsAPI.Rooms(this._client);
}

LiveStreams.Rooms = Rooms;

export declare namespace LiveStreams {
  export { Rooms as Rooms, type LiveRoom as LiveRoom, type RoomCreateParams as RoomCreateParams };
}
