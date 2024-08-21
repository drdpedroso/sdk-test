// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as UnreadChatRoomsAPI from './unread-chat-rooms';

export class UnreadChatRooms extends APIResource {
  /**
   * Get unread chat rooms
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UnreadChatRooms> {
    return this._client.get('/api/headless/v1/messages/unread_chat_rooms', options);
  }
}

export interface UnreadChatRooms {
  chat_rooms?: Array<string>;
}

export namespace UnreadChatRooms {
  export import UnreadChatRooms = UnreadChatRoomsAPI.UnreadChatRooms;
}
