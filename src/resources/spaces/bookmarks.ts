// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Bookmarks extends APIResource {
  /**
   * Get space bookmarks
   */
  list(
    spaceId: number,
    query?: BookmarkListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpaceBookmarks>;
  list(spaceId: number, options?: Core.RequestOptions): Core.APIPromise<SpaceBookmarks>;
  list(
    spaceId: number,
    query: BookmarkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpaceBookmarks> {
    if (isRequestOptions(query)) {
      return this.list(spaceId, {}, query);
    }
    return this._client.get(`/api/headless/v1/spaces/${spaceId}/bookmarks`, { query, ...options });
  }
}

export interface SpaceBookmarks {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<SpaceBookmarks.Record>;
}

export namespace SpaceBookmarks {
  export interface Record {
    id?: number;

    display_type?: string;

    links?: Array<Record.Link>;

    name?: string;
  }

  export namespace Record {
    export interface Link {
      id?: number;

      custom_emoji_dark_url?: string | null;

      custom_emoji_url?: string | null;

      display_type?: string;

      emoji?: string;

      name?: string;

      url?: string;
    }
  }
}

export interface BookmarkListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export declare namespace Bookmarks {
  export { type SpaceBookmarks as SpaceBookmarks, type BookmarkListParams as BookmarkListParams };
}
