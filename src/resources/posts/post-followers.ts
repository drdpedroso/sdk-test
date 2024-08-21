// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PostFollowersAPI from './post-followers';

export class PostFollowers extends APIResource {
  /**
   * Follow a post
   */
  create(postId: number, options?: Core.RequestOptions): Core.APIPromise<PostFollowerCreateResponse> {
    return this._client.post(`/api/headless/v1/posts/${postId}/post_followers`, options);
  }

  /**
   * Unfollow a post with ID
   */
  delete(postId: number, id: number, options?: Core.RequestOptions): Core.APIPromise<PostFollowerDeleteResponse> {
    return this._client.delete(`/api/headless/v1/posts/${postId}/post_followers/${id}`, options);
  }
}

export interface PostFollowerCreateResponse {
  message?: string;

  success?: boolean;
}

export interface PostFollowerDeleteResponse {
  message?: string;

  success?: boolean;
}

export namespace PostFollowers {
  export import PostFollowerCreateResponse = PostFollowersAPI.PostFollowerCreateResponse;
  export import PostFollowerDeleteResponse = PostFollowersAPI.PostFollowerDeleteResponse;
}
