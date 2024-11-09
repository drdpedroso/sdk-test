// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Comments extends APIResource {
  /**
   * Create a comment for a post
   */
  create(
    postId: number,
    body: CommentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Comment> {
    return this._client.post(`/api/headless/v1/posts/${postId}/comments`, { body, ...options });
  }

  /**
   * Get a comment for a post
   */
  retrieve(postId: number, id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Comment> {
    return this._client.get(`/api/headless/v1/posts/${postId}/comments/${id}`, options);
  }

  /**
   * Get list of comments for a post
   */
  list(
    postId: number | string,
    query?: CommentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Comments>;
  list(postId: number | string, options?: Core.RequestOptions): Core.APIPromise<Shared.Comments>;
  list(
    postId: number | string,
    query: CommentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Comments> {
    if (isRequestOptions(query)) {
      return this.list(postId, {}, query);
    }
    return this._client.get(`/api/headless/v1/posts/${postId}/comments`, { query, ...options });
  }

  /**
   * Delete a comment for a post
   */
  remove(postId: number, id: number, options?: Core.RequestOptions): Core.APIPromise<CommentRemoveResponse> {
    return this._client.delete(`/api/headless/v1/posts/${postId}/comments/${id}`, options);
  }
}

export interface CommentRemoveResponse {
  message?: string;

  success?: boolean;
}

export interface CommentCreateParams {
  comment?: CommentCreateParams.Comment;
}

export namespace CommentCreateParams {
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

export interface CommentListParams {
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

export declare namespace Comments {
  export {
    type CommentRemoveResponse as CommentRemoveResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
  };
}
