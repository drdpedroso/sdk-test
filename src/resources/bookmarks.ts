// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as BookmarksAPI from './bookmarks';

export class Bookmarks extends APIResource {
  /**
   * Create a bookmark
   */
  create(body: BookmarkCreateParams, options?: Core.RequestOptions): Core.APIPromise<Bookmark> {
    return this._client.post('/api/headless/v1/bookmarks', { body, ...options });
  }

  /**
   * Get bookmarks paginated list
   */
  list(query?: BookmarkListParams, options?: Core.RequestOptions): Core.APIPromise<Bookmarks>;
  list(options?: Core.RequestOptions): Core.APIPromise<Bookmarks>;
  list(
    query: BookmarkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Bookmarks> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/headless/v1/bookmarks', { query, ...options });
  }

  /**
   * Delete a bookmark
   */
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/headless/v1/bookmarks/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Bookmark {
  id?: number;

  bookmark_record?: Bookmark.BookmarkRecord;

  bookmarkable_type?: string;

  community_id?: number;

  community_member_id?: number;

  created_at?: string;

  is_deleted?: boolean;

  record_id?: number;
}

export namespace Bookmark {
  export interface BookmarkRecord {
    id?: number;

    attachment_count?: number;

    author?: BookmarkRecord.Author;

    body?: string;

    created_at?: string;

    name?: string;

    slug?: string;

    space?: BookmarkRecord.Space;

    url?: string;
  }

  export namespace BookmarkRecord {
    export interface Author {
      avatar_url?: string | null;

      community_member_id?: number;

      name?: string;
    }

    export interface Space {
      id?: number;

      custom_emoji_dark_url?: string;

      custom_emoji_url?: string;

      emoji?: string | null;

      name?: string;

      slug?: string;
    }
  }
}

export interface Bookmarks {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<Bookmark>;
}

export interface BookmarkCreateParams {
  bookmark_type: 'post' | 'comment';

  record_id: number;
}

export interface BookmarkListParams {
  bookmark_type?: 'post' | 'comment';

  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export namespace Bookmarks {
  export import Bookmark = BookmarksAPI.Bookmark;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import BookmarkCreateParams = BookmarksAPI.BookmarkCreateParams;
  export import BookmarkListParams = BookmarksAPI.BookmarkListParams;
}
