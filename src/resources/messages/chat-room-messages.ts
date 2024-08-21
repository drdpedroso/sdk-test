// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ChatRoomMessagesAPI from './chat-room-messages';

export class ChatRoomMessages extends APIResource {
  /**
   * Create chat room message
   */
  create(chatRoomUuid: string, body?: ChatRoomMessageCreateParams, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessageCreateResponse>
  create(chatRoomUuid: string, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessageCreateResponse>
  create(chatRoomUuid: string, body: ChatRoomMessageCreateParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessageCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(chatRoomUuid, {}, body);
    }
    return this._client.post(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_messages`, { body, ...options });
  }

  /**
   * Get chat room message
   */
  retrieve(chatRoomUuid: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessage> {
    return this._client.get(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_messages/${id}`, options);
  }

  /**
   * Update chat room message
   */
  update(chatRoomUuid: string, id: string, body?: ChatRoomMessageUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessage>
  update(chatRoomUuid: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessage>
  update(chatRoomUuid: string, id: string, body: ChatRoomMessageUpdateParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessage> {
    if (isRequestOptions(body)) {
      return this.update(chatRoomUuid, id, {}, body);
    }
    return this._client.put(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_messages/${id}`, { body, ...options });
  }

  /**
   * Fetch chat room messages
   */
  list(chatRoomUuid: string, query?: ChatRoomMessageListParams, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessages>
  list(chatRoomUuid: string, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessages>
  list(chatRoomUuid: string, query: ChatRoomMessageListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<ChatRoomMessages> {
    if (isRequestOptions(query)) {
      return this.list(chatRoomUuid, {}, query);
    }
    return this._client.get(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_messages`, { query, ...options });
  }

  /**
   * Delete chat room message
   */
  delete(chatRoomUuid: string, id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/headless/v1/messages/${chatRoomUuid}/chat_room_messages/${id}`, { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }
}

export interface ChatRoomMessage {
  id?: number;

  body?: string;

  bookmark_id?: number | null;

  chat_room_participant_id?: number;

  chat_room_uuid?: string;

  chat_thread_id?: number | null;

  created_at?: string;

  edited_at?: string | null;

  embedded_chat_message_access?: Array<Record<string, boolean>>;

  parent_message_id?: number | null;

  reactions?: Array<ChatRoomMessage.Reaction>;

  replies_count?: number;

  rich_text_body?: ChatRoomMessage.RichTextBody | null;

  sender?: ChatRoomMessage.Sender;

  sent_at?: string;

  thread_participants_preview?: Array<ChatRoomMessage.ThreadParticipantsPreview>;

  total_thread_participants_count?: number;
}

export namespace ChatRoomMessage {
  export interface Reaction {
    community_member_ids?: Array<number>;

    count?: number;

    emoji?: string;
  }

  export interface RichTextBody {
    attachments?: Array<unknown>;

    body?: RichTextBody.Body;

    circle_ios_fallback_text?: string;

    community_members?: Array<unknown>;

    entities?: Array<unknown>;

    format?: string;

    group_mentions?: Array<unknown>;

    inline_attachments?: Array<unknown>;

    polls?: Array<unknown>;

    sgids_to_object_map?: unknown;
  }

  export namespace RichTextBody {
    export interface Body {
      content?: Array<Body.Content>;

      type?: string;
    }

    export namespace Body {
      export interface Content {
        content: Array<Content.Content>;

        type: string;
      }

      export namespace Content {
        export interface Content {
          type: string;

          attrs?: Content.Attrs;

          circle_ios_fallback_text?: string | null;

          marks?: Array<Content.Mark> | null;

          text?: string | null;
        }

        export namespace Content {
          export interface Attrs {
            sgid: string;

            href?: string | null;

            target?: string | null;
          }

          export interface Mark {
            attrs?: Mark.Attrs;

            type?: string;
          }

          export namespace Mark {
            export interface Attrs {
              href?: string;

              target?: string;
            }
          }
        }
      }
    }
  }

  export interface Sender {
    id?: number;

    avatar_url?: string | null;

    community_member_id?: number;

    name?: string;

    user_public_uid?: string;
  }

  export interface ThreadParticipantsPreview {
    id?: number;

    avatar_url?: string | null;

    community_member_id?: number;

    name?: string;
  }
}

export interface ChatRoomMessages {
  id?: number;

  first_id?: number;

  has_next_page?: boolean;

  has_previous_page?: boolean;

  last_id?: number;

  records?: Array<ChatRoomMessage>;

  total_count?: number;
}

export interface ChatRoomMessageCreateResponse {
  creation_uuid?: string;

  parent_message_id?: number | null;

  sent_at?: string;
}

export interface ChatRoomMessageCreateParams {
  body?: string;

  rich_text_body?: unknown;
}

export interface ChatRoomMessageUpdateParams {
  body?: string;

  rich_text_body?: unknown;
}

export interface ChatRoomMessageListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of messages per page
   */
  per_page?: number;
}

export namespace ChatRoomMessages {
  export import ChatRoomMessage = ChatRoomMessagesAPI.ChatRoomMessage;
  export import ChatRoomMessages = ChatRoomMessagesAPI.ChatRoomMessages;
  export import ChatRoomMessageCreateResponse = ChatRoomMessagesAPI.ChatRoomMessageCreateResponse;
  export import ChatRoomMessageCreateParams = ChatRoomMessagesAPI.ChatRoomMessageCreateParams;
  export import ChatRoomMessageUpdateParams = ChatRoomMessagesAPI.ChatRoomMessageUpdateParams;
  export import ChatRoomMessageListParams = ChatRoomMessagesAPI.ChatRoomMessageListParams;
}
