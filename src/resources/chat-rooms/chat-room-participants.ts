// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ChatRoomsAPI from './chat-rooms';

export class ChatRoomParticipants extends APIResource {
  /**
   * Update chat room participant
   */
  update(
    chatRoomUuid: string,
    id: string,
    body?: ChatRoomParticipantUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatRoomsAPI.ChatRoom>;
  update(
    chatRoomUuid: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatRoomsAPI.ChatRoom>;
  update(
    chatRoomUuid: string,
    id: string,
    body: ChatRoomParticipantUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatRoomsAPI.ChatRoom> {
    if (isRequestOptions(body)) {
      return this.update(chatRoomUuid, id, {}, body);
    }
    return this._client.put(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_participants/${id}`, {
      body,
      ...options,
    });
  }
}

export interface ChatRoomParticipantUpdateParams {
  /**
   * Only admin is eligible to set/reset this
   */
  admin?: boolean;

  archived?: boolean;

  muted?: boolean;
}

export declare namespace ChatRoomParticipants {
  export { type ChatRoomParticipantUpdateParams as ChatRoomParticipantUpdateParams };
}
