// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Spaces extends APIResource {
  /**
   * Get paginated list of posts for a community member ID
   */
  list(
    communityMemberId: number,
    query?: SpaceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaginatedSpaces>;
  list(communityMemberId: number, options?: Core.RequestOptions): Core.APIPromise<PaginatedSpaces>;
  list(
    communityMemberId: number,
    query: SpaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaginatedSpaces> {
    if (isRequestOptions(query)) {
      return this.list(communityMemberId, {}, query);
    }
    return this._client.get(`/api/headless/v1/community_members/${communityMemberId}/spaces`, {
      query,
      ...options,
    });
  }
}

export interface PaginatedSpaces {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  per_page?: number;

  records?: Array<Shared.Space | null>;

  sort?: string | null;
}

export interface SpaceListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export declare namespace Spaces {
  export { type PaginatedSpaces as PaginatedSpaces, type SpaceListParams as SpaceListParams };
}
