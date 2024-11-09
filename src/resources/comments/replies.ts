// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Replies extends APIResource {
  /**
   * Create a reply for a comment
   */
  create(
    commentId: string,
    body: ReplyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Comment> {
    return this._client.post(`/api/headless/v1/comments/${commentId}/replies`, { body, ...options });
  }

  /**
   * Get a reply for a comment
   */
  retrieve(commentId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Comment> {
    return this._client.get(`/api/headless/v1/comments/${commentId}/replies/${id}`, options);
  }

  /**
   * Get list of replies for a comment
   */
  list(
    commentId: number,
    query?: ReplyListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Comments>;
  list(commentId: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Comments>;
  list(
    commentId: number,
    query: ReplyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Comments> {
    if (isRequestOptions(query)) {
      return this.list(commentId, {}, query);
    }
    return this._client.get(`/api/headless/v1/comments/${commentId}/replies`, { query, ...options });
  }

  /**
   * Delete a reply for a comment
   */
  delete(commentId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<ReplyDeleteResponse> {
    return this._client.delete(`/api/headless/v1/comments/${commentId}/replies/${id}`, options);
  }
}

export interface ReplyDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface ReplyCreateParams {
  comment?: ReplyCreateParams.Comment;
}

export namespace ReplyCreateParams {
  export interface Comment {
    body?: string;

    tiptap_body?: Comment.TiptapBody;
  }

  export namespace Comment {
    export interface TiptapBody {
      body?: TiptapBody.Body;
    }

    export namespace TiptapBody {
      export interface Body {
        content: Array<Body.Content>;

        type: string;
      }

      export namespace Body {
        export interface Content {
          attrs?: unknown;

          marks?: Array<unknown>;

          text?: string | null;

          type?: string;
        }
      }
    }
  }
}

export interface ReplyListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;

  sort?: 'oldest' | 'latest' | 'alphabetical' | 'likes' | 'latest_updated' | 'oldest_updated';
}

export declare namespace Replies {
  export {
    type ReplyDeleteResponse as ReplyDeleteResponse,
    type ReplyCreateParams as ReplyCreateParams,
    type ReplyListParams as ReplyListParams,
  };
}
