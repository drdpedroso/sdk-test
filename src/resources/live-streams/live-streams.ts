// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Rooms } from './rooms';
import * as RoomsAPI from './rooms';

export class LiveStreams extends APIResource {
  rooms: RoomsAPI.Rooms = new RoomsAPI.Rooms(this._client);
}

export namespace LiveStreams {
  export import Rooms = RoomsAPI.Rooms;
  export import LiveRoom = RoomsAPI.LiveRoom;
  export import RoomCreateParams = RoomsAPI.RoomCreateParams;
}
