// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ChatRoomParticipantsAPI from './chat-room-participants';

export class ChatRoomParticipants extends APIResource {
  /**
   * Get chat room participants
   */
  list(chatRoomUuid: string, query?: ChatRoomParticipantListParams, options?: Core.RequestOptions): Core.APIPromise<ChatRoomParticipants>
  list(chatRoomUuid: string, options?: Core.RequestOptions): Core.APIPromise<ChatRoomParticipants>
  list(chatRoomUuid: string, query: ChatRoomParticipantListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<ChatRoomParticipants> {
    if (isRequestOptions(query)) {
      return this.list(chatRoomUuid, {}, query);
    }
    return this._client.get(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_participants`, { query, ...options });
  }
}

export interface ChatRoomParticipants {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<ChatRoomParticipants.Record>;
}

export namespace ChatRoomParticipants {
  export interface Record {
    id?: number;

    admin?: boolean;

    archived?: boolean;

    avatar_url?: string | null;

    bio?: string;

    community_admin?: boolean;

    community_member_id?: number;

    deleted_at?: string | null;

    email?: string;

    headline?: string;

    last_seen_text?: string;

    location?: string;

    moderator?: boolean;

    muted?: boolean;

    name?: string;

    status?: string;

    user_id?: number;

    user_public_uid?: string;
  }
}

export interface ChatRoomParticipantListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export namespace ChatRoomParticipants {
  export import ChatRoomParticipants = ChatRoomParticipantsAPI.ChatRoomParticipants;
  export import ChatRoomParticipantListParams = ChatRoomParticipantsAPI.ChatRoomParticipantListParams;
}
