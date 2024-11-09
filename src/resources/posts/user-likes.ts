// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class UserLikes extends APIResource {
  /**
   * Create a user like for a post
   */
  create(postId: string, options?: Core.RequestOptions): Core.APIPromise<UserLikeCreateResponse> {
    return this._client.post(`/api/headless/v1/posts/${postId}/user_likes`, options);
  }

  /**
   * Get list of users who liked a post
   */
  list(
    postId: string,
    query?: UserLikeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UserLikes>;
  list(postId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.UserLikes>;
  list(
    postId: string,
    query: UserLikeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UserLikes> {
    if (isRequestOptions(query)) {
      return this.list(postId, {}, query);
    }
    return this._client.get(`/api/headless/v1/posts/${postId}/user_likes`, { query, ...options });
  }

  /**
   * Destroy a user like for a post
   */
  delete(postId: string, options?: Core.RequestOptions): Core.APIPromise<UserLikeDeleteResponse> {
    return this._client.delete(`/api/headless/v1/posts/${postId}/user_likes`, options);
  }
}

export interface UserLikeCreateResponse {
  message?: string;

  success?: boolean;
}

export interface UserLikeDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface UserLikeListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export declare namespace UserLikes {
  export {
    type UserLikeCreateResponse as UserLikeCreateResponse,
    type UserLikeDeleteResponse as UserLikeDeleteResponse,
    type UserLikeListParams as UserLikeListParams,
  };
}
