// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChatRoomMessagesAPI from './chat-room-messages';
import {
  ChatRoomMessage,
  ChatRoomMessageCreateParams,
  ChatRoomMessageCreateResponse,
  ChatRoomMessageListParams,
  ChatRoomMessageUpdateParams,
  ChatRoomMessages,
} from './chat-room-messages';
import * as ChatRoomParticipantsAPI from './chat-room-participants';
import { ChatRoomParticipantListParams, ChatRoomParticipants } from './chat-room-participants';

export class Messages extends APIResource {
  chatRoomMessages: ChatRoomMessagesAPI.ChatRoomMessages = new ChatRoomMessagesAPI.ChatRoomMessages(
    this._client,
  );
  chatRoomParticipants: ChatRoomParticipantsAPI.ChatRoomParticipants =
    new ChatRoomParticipantsAPI.ChatRoomParticipants(this._client);
}

export declare namespace Messages {
  export {
    type ChatRoomMessages as ChatRoomMessages,
    type ChatRoomMessage as ChatRoomMessage,
    type ChatRoomMessageCreateResponse as ChatRoomMessageCreateResponse,
    type ChatRoomMessageCreateParams as ChatRoomMessageCreateParams,
    type ChatRoomMessageUpdateParams as ChatRoomMessageUpdateParams,
    type ChatRoomMessageListParams as ChatRoomMessageListParams,
  };

  export {
    type ChatRoomParticipants as ChatRoomParticipants,
    type ChatRoomParticipantListParams as ChatRoomParticipantListParams,
  };
}
