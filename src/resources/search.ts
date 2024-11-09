// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Search extends APIResource {
  /**
   * Search
   */
  list(query: SearchListParams, options?: Core.RequestOptions): Core.APIPromise<SearchResults> {
    return this._client.get('/api/headless/v1/search', { query, ...options });
  }
}

export interface SearchResults {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<
    | SearchResults.SearchedPost
    | SearchResults.SearchedCommunityMember
    | SearchResults.SearchedMemberTag
    | SearchResults.SearchedSpace
    | SearchResults.SearchedSpaceGroup
    | SearchResults.SearchedComment
  >;
}

export namespace SearchResults {
  export interface SearchedPost {
    id?: string;

    attributes?: SearchedPost.Attributes;

    type?: string;
  }

  export namespace SearchedPost {
    export interface Attributes {
      id?: number;

      author?: Attributes.Author;

      body?: string;

      comments_count?: number;

      community_id?: number;

      created_at?: string;

      hide_meta_info?: boolean;

      highlighted_body?: string | null;

      highlighted_email?: string | null;

      highlighted_name?: string | null;

      highlighted_post_name?: string | null;

      highlighted_slug?: string | null;

      highlighted_user_name?: string | null;

      name?: string;

      post_type?: string;

      slug?: string;

      space?: Attributes.Space;

      space_members_count?: number | null;

      updated_at?: string;

      url?: string;

      user_likes_count?: number;
    }

    export namespace Attributes {
      export interface Author {
        id?: number;

        avatar_url?: string | null;

        community_member_id?: number;

        name?: string;
      }

      export interface Space {
        id?: number;

        name?: string;

        slug?: string;
      }
    }
  }

  export interface SearchedCommunityMember {
    id?: string;

    attributes?: SearchedCommunityMember.Attributes;

    type?: string;
  }

  export namespace SearchedCommunityMember {
    export interface Attributes {
      id?: number | string;

      avatar_url?: string | null;

      community_member_id?: number;

      headline?: string;

      name?: string;

      roles?: Array<string>;
    }
  }

  export interface SearchedMemberTag {
    id?: string;

    attributes?: SearchedMemberTag.Attributes;

    type?: string;
  }

  export namespace SearchedMemberTag {
    export interface Attributes {
      id?: number;

      community_id?: number;

      highlighted_name?: string | null;

      name?: string;

      tagged_members_count?: number;
    }
  }

  export interface SearchedSpace {
    id?: string;

    attributes?: SearchedSpace.Attributes;

    type?: string;
  }

  export namespace SearchedSpace {
    export interface Attributes {
      id?: number;

      community_id?: number;

      created_at?: string;

      custom_emoji_dark_url?: string | null;

      custom_emoji_url?: string | null;

      emoji?: string | null;

      highlighted_name?: string | null;

      highlighted_slug?: string | null;

      name?: string;

      slug?: string;

      space_members_count?: number | null;

      updated_at?: string;
    }
  }

  export interface SearchedSpaceGroup {
    id?: string;

    attributes?: SearchedSpaceGroup.Attributes;

    type?: string;
  }

  export namespace SearchedSpaceGroup {
    export interface Attributes {
      id?: number;

      community_id?: number;

      highlighted_name?: string | null;

      name?: string;

      space_group_members_count?: number;
    }
  }

  export interface SearchedComment {
    id?: string;

    attributes?: SearchedComment.Attributes;

    type?: string;
  }

  export namespace SearchedComment {
    export interface Attributes {
      id?: number;

      author?: Attributes.Author;

      body_text?: string;

      community_id?: number;

      parent_comment_id?: number | null;

      post_id?: number;

      post_name?: string;

      space_id?: number;

      title?: string;
    }

    export namespace Attributes {
      export interface Author {
        id?: number;

        avatar_url?: string | null;

        name?: string;
      }
    }
  }
}

export interface SearchListParams {
  /**
   * Search text
   */
  search_text: string;

  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export declare namespace Search {
  export { type SearchResults as SearchResults, type SearchListParams as SearchListParams };
}
