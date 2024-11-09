// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ChatRoomParticipantsAPI from './chat-room-participants';
import { ChatRoomParticipantUpdateParams, ChatRoomParticipants } from './chat-room-participants';
import * as UnreadChatRoomsAPI from './unread-chat-rooms';
import { UnreadChatRooms } from './unread-chat-rooms';

export class ChatRooms extends APIResource {
  chatRoomParticipants: ChatRoomParticipantsAPI.ChatRoomParticipants =
    new ChatRoomParticipantsAPI.ChatRoomParticipants(this._client);
  unreadChatRooms: UnreadChatRoomsAPI.UnreadChatRooms = new UnreadChatRoomsAPI.UnreadChatRooms(this._client);

  /**
   * Create a chat room
   */
  create(body: ChatRoomCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/api/headless/v1/messages', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get chat room details
   */
  retrieve(uuid: string, options?: Core.RequestOptions): Core.APIPromise<ChatRoom> {
    return this._client.get(`/api/headless/v1/messages/${uuid}`, options);
  }

  /**
   * Get chat rooms
   */
  list(query?: ChatRoomListParams, options?: Core.RequestOptions): Core.APIPromise<ChatRooms>;
  list(options?: Core.RequestOptions): Core.APIPromise<ChatRooms>;
  list(
    query: ChatRoomListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatRooms> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/headless/v1/messages', { query, ...options });
  }

  /**
   * Mark all messages in a chat room as read
   */
  markAllAsRead(uuid: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(`/api/headless/v1/messages/${uuid}/mark_all_as_read`, options);
  }
}

export interface ChatRoom {
  chat_room?: ChatRoom.ChatRoom;
}

export namespace ChatRoom {
  export interface ChatRoom {
    id?: number;

    chat_room_description?: string;

    chat_room_kind?: string;

    chat_room_name?: string;

    chat_room_participants_count?: number;

    chat_room_show_history?: boolean;

    current_participant?: ChatRoom.CurrentParticipant;

    first_unread_message_id?: number | null;

    identifier?: string;

    last_message?: ChatRoom.LastMessage;

    other_participants_preview?: Array<ChatRoom.OtherParticipantsPreview>;

    unread_messages_count?: number;

    uuid?: string;
  }

  export namespace ChatRoom {
    export interface CurrentParticipant {
      id?: number;

      admin?: boolean;

      archived?: boolean;

      avatar_url?: string | null;

      bio?: string;

      can_send_message?: boolean;

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

      user_id?: number;

      user_public_uid?: string;
    }

    export interface LastMessage {
      id?: number;

      body?: string;

      bookmark_id?: number | null;

      chat_room_participant_id?: number;

      chat_room_uuid?: string;

      created_at?: string;

      edited_at?: string | null;

      parent_message_id?: number | null;

      rich_text_body?: LastMessage.RichTextBody | null;
    }

    export namespace LastMessage {
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
    }

    export interface OtherParticipantsPreview {
      id?: number;

      admin?: boolean;

      archived?: boolean;

      avatar_url?: string | null;

      bio?: string;

      can_send_message?: boolean;

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
}

export interface ChatRooms {
  count?: number;

  has_next_page?: boolean;

  meta?: unknown;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<ChatRoom>;
}

export type Empty = unknown;

export interface ChatRoomCreateParams {
  chat_room: ChatRoomCreateParams.ChatRoom;
}

export namespace ChatRoomCreateParams {
  export interface ChatRoom {
    body: string;

    kind: string;

    community_member_ids?: Array<string>;

    rich_text_body?: unknown;
  }
}

export interface ChatRoomListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

ChatRooms.ChatRoomParticipants = ChatRoomParticipants;

export declare namespace ChatRooms {
  export {
    type ChatRoom as ChatRoom,
    type ChatRooms as ChatRooms,
    type Empty as Empty,
    type ChatRoomCreateParams as ChatRoomCreateParams,
    type ChatRoomListParams as ChatRoomListParams,
  };

  export {
    ChatRoomParticipants as ChatRoomParticipants,
    type ChatRoomParticipantUpdateParams as ChatRoomParticipantUpdateParams,
  };

  export { type UnreadChatRooms as UnreadChatRooms };
}
