// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UnreadChatThreadsAPI from './unread-chat-threads';
import { UnreadChatThreadListResponse, UnreadChatThreads } from './unread-chat-threads';
import * as ChatRoomMessagesAPI from '../messages/chat-room-messages';

export class ChatThreads extends APIResource {
  unreadChatThreads: UnreadChatThreadsAPI.UnreadChatThreads = new UnreadChatThreadsAPI.UnreadChatThreads(
    this._client,
  );

  /**
   * Get chat thread
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ChatThread> {
    return this._client.get(`/api/headless/v1/chat_threads/${id}`, options);
  }

  /**
   * List chat threads
   */
  list(query?: ChatThreadListParams, options?: Core.RequestOptions): Core.APIPromise<ChatThreads>;
  list(options?: Core.RequestOptions): Core.APIPromise<ChatThreads>;
  list(
    query: ChatThreadListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ChatThreads> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/headless/v1/chat_threads', { query, ...options });
  }
}

export interface ChatThread {
  id?: number;

  chat_room?: ChatThread.ChatRoom;

  parent_message?: ChatRoomMessagesAPI.ChatRoomMessage;

  replies?: Array<ChatRoomMessagesAPI.ChatRoomMessage>;
}

export namespace ChatThread {
  export interface ChatRoom {
    embedded_space?: ChatRoom.EmbeddedSpace | null;

    kind?: string;

    lesson?: ChatRoom.Lesson | null;

    name?: string;
  }

  export namespace ChatRoom {
    export interface EmbeddedSpace {
      id?: number;

      custom_emoji?: string;

      emoji?: string | null;

      host?: string;

      include_default?: boolean;

      slug?: string;
    }

    export interface Lesson {
      id?: number;

      courses_section_id?: number;

      name?: string;
    }
  }
}

export interface ChatThreads {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<ChatThread>;
}

export interface ChatThreadListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

ChatThreads.UnreadChatThreads = UnreadChatThreads;

export declare namespace ChatThreads {
  export {
    type ChatThread as ChatThread,
    type ChatThreads as ChatThreads,
    type ChatThreadListParams as ChatThreadListParams,
  };

  export {
    UnreadChatThreads as UnreadChatThreads,
    type UnreadChatThreadListResponse as UnreadChatThreadListResponse,
  };
}
