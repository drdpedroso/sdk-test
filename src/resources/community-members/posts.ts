// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Posts extends APIResource {
  /**
   * Get paginated list of posts for a community member ID
   */
  list(
    communityMemberId: number,
    query?: PostListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Posts>;
  list(communityMemberId: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Posts>;
  list(
    communityMemberId: number,
    query: PostListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Posts> {
    if (isRequestOptions(query)) {
      return this.list(communityMemberId, {}, query);
    }
    return this._client.get(`/api/headless/v1/community_members/${communityMemberId}/posts`, {
      query,
      ...options,
    });
  }
}

export interface PostListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export declare namespace Posts {
  export { type PostListParams as PostListParams };
}
