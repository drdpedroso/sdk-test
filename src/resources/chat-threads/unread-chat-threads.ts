// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class UnreadChatThreads extends APIResource {
  /**
   * Get unread chat threads
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UnreadChatThreadListResponse> {
    return this._client.get('/api/headless/v1/chat_threads/unread_chat_threads', options);
  }
}

export interface UnreadChatThreadListResponse {
  chat_thread_ids?: Array<number>;
}

export declare namespace UnreadChatThreads {
  export { type UnreadChatThreadListResponse as UnreadChatThreadListResponse };
}
