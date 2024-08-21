// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as AdvancedSearchAPI from './advanced-search';

export class AdvancedSearch extends APIResource {
  /**
   * Advanced Search
   */
  search(query: AdvancedSearchSearchParams, options?: Core.RequestOptions): Core.APIPromise<AdvancedSearchResults> {
    return this._client.get('/api/headless/v1/advanced_search', { query, ...options });
  }
}

export interface AdvancedSearchResults {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<AdvancedSearchResults.AdvancedSearchedPost | AdvancedSearchResults.AdvancedSearchedComment | AdvancedSearchResults.AdvancedSearchedLesson | AdvancedSearchResults.AdvancedSearchedSpace | AdvancedSearchResults.AdvancedSearchedCommunityMember | AdvancedSearchResults.AdvancedSearchedGroupMention>;
}

export namespace AdvancedSearchResults {
  export interface AdvancedSearchedPost {
    id?: number;

    author?: AdvancedSearchedPost.Author;

    body?: string | null;

    cover_image_url?: string | null;

    created_at?: string;

    highlighted_body?: string | null;

    highlighted_name?: string | null;

    name?: string;

    sgid?: string;

    slug?: string;

    space?: AdvancedSearchedPost.Space;

    starts_at?: string | null;

    status?: string;

    type?: string;

    url?: string;
  }

  export namespace AdvancedSearchedPost {
    export interface Author {
      avatar_url?: string | null;

      community_member_id?: number;

      name?: string;
    }

    export interface Space {
      id?: number;

      custom_emoji_dark_url?: string | null;

      custom_emoji_url?: string | null;

      emoji?: string | null;

      name?: string;

      slug?: string;
    }
  }

  export interface AdvancedSearchedComment {
    id?: number;

    author?: AdvancedSearchedComment.Author;

    body?: string;

    highlighted_body?: string | null;

    parent_comment_id?: number | null;

    post_id?: number;

    post_name?: string;

    post_slug?: string;

    space_id?: number;

    space_slug?: string;

    type?: string;

    url?: string;
  }

  export namespace AdvancedSearchedComment {
    export interface Author {
      avatar_url?: string | null;

      community_member_id?: number;

      name?: string;
    }
  }

  export interface AdvancedSearchedLesson {
    id?: number;

    body?: string;

    created_at?: string;

    highlighted_body?: string | null;

    highlighted_name?: string | null;

    name?: string;

    section_id?: number;

    section_name?: string;

    sgid?: string;

    space?: AdvancedSearchedLesson.Space;

    status?: string;

    type?: string;
  }

  export namespace AdvancedSearchedLesson {
    export interface Space {
      id?: number;

      custom_emoji_dark_url?: string | null;

      custom_emoji_url?: string | null;

      emoji?: string | null;

      name?: string;

      slug?: string;
    }
  }

  export interface AdvancedSearchedSpace {
    id?: number;

    custom_emoji_dark_url?: string | null;

    custom_emoji_url?: string | null;

    emoji?: string | null;

    highlighted_name?: string | null;

    name?: string;

    sgid?: string;

    slug?: string;

    type?: string;
  }

  export interface AdvancedSearchedCommunityMember {
    id?: number;

    avatar_url?: string | null;

    bio?: string | null;

    headline?: string;

    highlighted_name?: string | null;

    location?: string | null;

    name?: string;

    public_uid?: string;

    sgid?: string;

    type?: string;

    user_id?: number;
  }

  export interface AdvancedSearchedGroupMention {
    id?: number;

    highlighted_name?: string | null;

    mention_scope?: string;

    mention_type?: string;

    name?: string;

    sgid?: string;

    type?: string;
  }
}

export interface AdvancedSearchSearchParams {
  /**
   * Search query
   */
  query: string;

  /**
   * Mention scope
   */
  mention_scope?: string;

  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;

  /**
   * Space ID
   */
  space_id?: number;

  /**
   * Search type
   */
  type?: 'general' | 'members' | 'posts' | 'comments' | 'spaces' | 'lessons' | 'events' | 'entity_list' | 'mentions';
}

export namespace AdvancedSearch {
  export import AdvancedSearchResults = AdvancedSearchAPI.AdvancedSearchResults;
  export import AdvancedSearchSearchParams = AdvancedSearchAPI.AdvancedSearchSearchParams;
}
