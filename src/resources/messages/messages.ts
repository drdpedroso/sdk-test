// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { ChatRoomMessages } from './chat-room-messages';
import { ChatRoomParticipants } from './chat-room-participants';
import * as ChatRoomMessagesAPI from './chat-room-messages';
import * as ChatRoomParticipantsAPI from './chat-room-participants';

export class Messages extends APIResource {
  chatRoomMessages: ChatRoomMessagesAPI.ChatRoomMessages = new ChatRoomMessagesAPI.ChatRoomMessages(this._client);
  chatRoomParticipants: ChatRoomParticipantsAPI.ChatRoomParticipants = new ChatRoomParticipantsAPI.ChatRoomParticipants(this._client);
}

export namespace Messages {
  export import ChatRoomMessages = ChatRoomMessagesAPI.ChatRoomMessages;
  export import ChatRoomMessage = ChatRoomMessagesAPI.ChatRoomMessage;
  export import ChatRoomMessageCreateResponse = ChatRoomMessagesAPI.ChatRoomMessageCreateResponse;
  export import ChatRoomMessageCreateParams = ChatRoomMessagesAPI.ChatRoomMessageCreateParams;
  export import ChatRoomMessageUpdateParams = ChatRoomMessagesAPI.ChatRoomMessageUpdateParams;
  export import ChatRoomMessageListParams = ChatRoomMessagesAPI.ChatRoomMessageListParams;
  export import ChatRoomParticipants = ChatRoomParticipantsAPI.ChatRoomParticipants;
  export import ChatRoomParticipantListParams = ChatRoomParticipantsAPI.ChatRoomParticipantListParams;
}
