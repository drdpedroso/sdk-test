// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as CommentsAPI from './comments';
import * as Shared from '../shared';

export class Comments extends APIResource {
  /**
   * Get paginated list of comments for a community member ID
   */
  list(communityMemberId: number, query?: CommentListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Comments>
  list(communityMemberId: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Comments>
  list(communityMemberId: number, query: CommentListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Shared.Comments> {
    if (isRequestOptions(query)) {
      return this.list(communityMemberId, {}, query);
    }
    return this._client.get(`/api/headless/v1/community_members/${communityMemberId}/comments`, { query, ...options });
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
}

export namespace Comments {
  export import CommentListParams = CommentsAPI.CommentListParams;
}
