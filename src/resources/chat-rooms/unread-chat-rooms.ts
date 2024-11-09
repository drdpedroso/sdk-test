// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

export declare namespace UnreadChatRooms {
  export { type UnreadChatRooms as UnreadChatRooms };
}
