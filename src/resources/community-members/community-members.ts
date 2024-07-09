// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CommunityMembersAPI from './community-members';
import * as CommentsAPI from './comments';
import * as PostsAPI from './posts';
import * as PublicProfileAPI from './public-profile';
import * as SpacesAPI from './spaces';

export class CommunityMembers extends APIResource {
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  spaces: SpacesAPI.Spaces = new SpacesAPI.Spaces(this._client);
  publicProfile: PublicProfileAPI.PublicProfileResource = new PublicProfileAPI.PublicProfileResource(
    this._client,
  );

  /**
   * Get community members paginated list
   */
  list(query?: CommunityMemberListParams, options?: Core.RequestOptions): Core.APIPromise<CommunityMembers>;
  list(options?: Core.RequestOptions): Core.APIPromise<CommunityMembers>;
  list(
    query: CommunityMemberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommunityMembers> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/headless/v1/community_members', { query, ...options });
  }
}

export interface CommunityMembers {
  count?: number;

  has_next_page?: boolean;

  next_search_after?: Array<number | string> | null;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<CommunityMembers.Record | null>;

  sort?: string | null;

  total_record_count?: number;
}

export namespace CommunityMembers {
  export interface Record {
    avatar_url?: string | null;

    can_receive_dm_from_current_member?: boolean;

    community_member_id?: number;

    headline?: string;

    member_tags?: Array<Record.MemberTag>;

    messaging_enabled?: boolean | null;

    name?: string;
  }

  export namespace Record {
    export interface MemberTag {
      id?: number;

      color?: string;

      custom_emoji_dark_url?: string;

      custom_emoji_url?: string;

      display_format?: string;

      display_locations?: Array<string>;

      emoji?: string;

      is_public?: boolean;

      name?: string;

      text_color?: string;
    }
  }
}

export interface CommunityMemberListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;

  /**
   * Array of integers to search after which received in the previous response as
   * next_search_after
   */
  search_after?: Array<number | string>;

  search_text?: string;

  sort?: 'alphabetical' | 'oldest' | 'latest';

  space_id?: number;
}

export namespace CommunityMembers {
  export import CommunityMembers = CommunityMembersAPI.CommunityMembers;
  export import CommunityMemberListParams = CommunityMembersAPI.CommunityMemberListParams;
  export import Comments = CommentsAPI.Comments;
  export import CommentListParams = CommentsAPI.CommentListParams;
  export import Posts = PostsAPI.Posts;
  export import PostListParams = PostsAPI.PostListParams;
  export import Spaces = SpacesAPI.Spaces;
  export import PaginatedSpaces = SpacesAPI.PaginatedSpaces;
  export import SpaceListParams = SpacesAPI.SpaceListParams;
  export import PublicProfileResource = PublicProfileAPI.PublicProfileResource;
  export import PublicProfile = PublicProfileAPI.PublicProfile;
}
