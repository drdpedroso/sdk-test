// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SpacesPostsAPI from './posts';
import * as Shared from '../shared';
import * as EventAttendeesAPI from '../events/event-attendees';
import * as PostsAPI from '../posts/posts';

export class Posts extends APIResource {
  /**
   * Create a post
   */
  create(params: PostCreateParams, options?: Core.RequestOptions): Core.APIPromise<Post> {
    const { path_space_id, body_space_id, ...body } = params;
    return this._client.post(`/api/headless/v1/spaces/${path_space_id}/posts`, { body: { space_id: body_space_id, ...body }, ...options });
  }

  /**
   * Get a post
   */
  retrieve(spaceId: number | string, id: number | string, options?: Core.RequestOptions): Core.APIPromise<Post> {
    return this._client.get(`/api/headless/v1/spaces/${spaceId}/posts/${id}`, options);
  }

  /**
   * Get list of posts in a space
   */
  list(spaceId: number | string, query?: PostListParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Posts>
  list(spaceId: number | string, options?: Core.RequestOptions): Core.APIPromise<Shared.Posts>
  list(spaceId: number | string, query: PostListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Shared.Posts> {
    if (isRequestOptions(query)) {
      return this.list(spaceId, {}, query);
    }
    return this._client.get(`/api/headless/v1/spaces/${spaceId}/posts`, { query, ...options });
  }

  /**
   * Delete a post
   */
  delete(spaceId: number | string, id: number | string, options?: Core.RequestOptions): Core.APIPromise<PostDeleteResponse> {
    return this._client.delete(`/api/headless/v1/spaces/${spaceId}/posts/${id}`, options);
  }
}

export type Post = Post.BasicPost | PostsAPI.ImagePost | Post.EventPost

export namespace Post {
  export interface BasicPost {
    id?: number;

    action?: BasicPost.Action;

    author?: BasicPost.Author;

    body?: BasicPost.Body | null;

    body_plain_text?: string;

    body_plain_text_without_attachments?: string;

    bookmark_id?: number | null;

    cardview_image?: string | null;

    comment_count?: number;

    cover_image?: string | null;

    created_at?: string;

    custom_html?: string | null;

    display_title?: string;

    editor?: string;

    first_liked_by?: Array<BasicPost.FirstLikedBy>;

    hide_meta_info?: boolean;

    is_comments_closed?: boolean;

    is_comments_enabled?: boolean;

    is_liked?: boolean;

    is_liking_enabled?: boolean;

    is_pinned_at_top_of_space?: boolean;

    is_truncation_disabled?: boolean;

    name?: string | null;

    post_follower_id?: number | null;

    post_type?: string;

    slug?: string;

    space?: BasicPost.Space;

    space_type?: string;

    status?: string;

    tiptap_body?: BasicPost.TiptapBody | null;

    topic_follower_id?: number | null;

    topics?: Array<BasicPost.Topic>;

    updated_at?: string;

    url?: string;

    user_likes_count?: number;
  }

  export namespace BasicPost {
    export interface Action {
      created_at?: string;

      type?: string;

      user_name?: string;
    }

    export interface Author {
      id?: number;

      avatar_url?: string | null;

      headline?: string;

      member_tags?: Array<Author.MemberTag>;

      name?: string;

      rich_text_field_sgid?: string;

      roles?: Author.UnionMember0 | Array<string> | null;
    }

    export namespace Author {
      export interface MemberTag {
        id?: number;

        color?: string;

        custom_emoji_dark_url?: string;

        custom_emoji_url?: string;

        display_format?: string;

        display_locations?: Array<string>;

        emoji?: string;

        is_background_enabled?: boolean;

        is_public?: boolean;

        name?: string;
      }

      export interface UnionMember0 {
        admin?: boolean;

        moderator?: boolean;
      }
    }

    export interface Body {
      attachments?: Record<string, unknown>;

      attachments_array?: Array<unknown>;

      html?: string;
    }

    export interface FirstLikedBy {
      id?: number;

      avatar_url?: string | null;

      headline?: string;

      member_tags?: Array<FirstLikedBy.MemberTag>;

      name?: string;

      rich_text_field_sgid?: string;

      roles?: FirstLikedBy.UnionMember0 | Array<string> | null;
    }

    export namespace FirstLikedBy {
      export interface MemberTag {
        id?: number;

        color?: string;

        custom_emoji_dark_url?: string;

        custom_emoji_url?: string;

        display_format?: string;

        display_locations?: Array<string>;

        emoji?: string;

        is_background_enabled?: boolean;

        is_public?: boolean;

        name?: string;
      }

      export interface UnionMember0 {
        admin?: boolean;

        moderator?: boolean;
      }
    }

    export interface Space {
      id?: number;

      custom_emoji_dark_url?: string;

      custom_emoji_url?: string;

      emoji?: string | null;

      name?: string;

      slug?: string;
    }

    export interface TiptapBody {
      attachments?: Array<unknown>;

      body?: TiptapBody.Body;

      circle_ios_fallback_text?: string;

      community_members?: Array<TiptapBody.CommunityMember>;

      entities?: Array<unknown>;

      format?: string;

      group_mentions?: Array<unknown>;

      inline_attachments?: Array<unknown>;

      polls?: Array<unknown>;

      sgids_to_object_map?: unknown;
    }

    export namespace TiptapBody {
      export interface Body {
        content?: Array<unknown>;

        type?: string;
      }

      export interface CommunityMember {
        id?: number;

        avatar_url?: string | null;

        headline?: string;

        member_tags?: Array<CommunityMember.MemberTag>;

        name?: string;

        rich_text_field_sgid?: string;

        roles?: CommunityMember.UnionMember0 | Array<string> | null;
      }

      export namespace CommunityMember {
        export interface MemberTag {
          id?: number;

          color?: string;

          custom_emoji_dark_url?: string;

          custom_emoji_url?: string;

          display_format?: string;

          display_locations?: Array<string>;

          emoji?: string;

          is_background_enabled?: boolean;

          is_public?: boolean;

          name?: string;
        }

        export interface UnionMember0 {
          admin?: boolean;

          moderator?: boolean;
        }
      }
    }

    export interface Topic {
      id?: number;

      admin_only?: boolean;

      name?: string;
    }
  }

  export interface EventPost {
    id?: number;

    action?: EventPost.Action;

    author?: EventPost.Author;

    body?: EventPost.Body | null;

    body_plain_text?: string;

    body_plain_text_without_attachments?: string;

    bookmark_id?: number | null;

    cardview_image?: string | null;

    comment_count?: number;

    cover_image?: string | null;

    created_at?: string;

    custom_html?: string | null;

    display_title?: string;

    editor?: string;

    event_attendees?: EventPost.EventAttendees;

    event_setting_attributes?: EventPost.EventSettingAttributes;

    event_type?: string;

    first_liked_by?: Array<EventPost.FirstLikedBy>;

    hide_meta_info?: boolean;

    is_comments_closed?: boolean;

    is_comments_enabled?: boolean;

    is_liked?: boolean;

    is_liking_enabled?: boolean;

    is_pinned_at_top_of_space?: boolean;

    is_truncation_disabled?: boolean;

    name?: string | null;

    post_follower_id?: number | null;

    post_type?: string;

    recurring_setting_attributes?: EventPost.RecurringSettingAttributes;

    rsvp_status?: string;

    rsvped_event?: boolean;

    slug?: string;

    space?: EventPost.Space;

    space_type?: string;

    status?: string;

    tiptap_body?: EventPost.TiptapBody | null;

    topic_follower_id?: number | null;

    topics?: Array<EventPost.Topic>;

    updated_at?: string;

    url?: string;

    user_likes_count?: number;
  }

  export namespace EventPost {
    export interface Action {
      created_at?: string;

      type?: string;

      user_name?: string;
    }

    export interface Author {
      id?: number;

      avatar_url?: string | null;

      headline?: string;

      member_tags?: Array<Author.MemberTag>;

      name?: string;

      rich_text_field_sgid?: string;

      roles?: Author.UnionMember0 | Array<string> | null;
    }

    export namespace Author {
      export interface MemberTag {
        id?: number;

        color?: string;

        custom_emoji_dark_url?: string;

        custom_emoji_url?: string;

        display_format?: string;

        display_locations?: Array<string>;

        emoji?: string;

        is_background_enabled?: boolean;

        is_public?: boolean;

        name?: string;
      }

      export interface UnionMember0 {
        admin?: boolean;

        moderator?: boolean;
      }
    }

    export interface Body {
      attachments?: Record<string, unknown>;

      attachments_array?: Array<unknown>;

      html?: string;
    }

    export interface EventAttendees {
      count?: number;

      records?: Array<EventAttendeesAPI.EventAttendee>;
    }

    export interface EventSettingAttributes {
      confirmation_message_button_link?: string;

      confirmation_message_button_title?: string;

      confirmation_message_description?: string;

      confirmation_message_title?: string;

      duration_in_seconds?: number;

      enable_custom_thank_you_message?: boolean;

      ends_at?: string;

      hide_attendees?: boolean;

      hide_location_from_non_attendees?: boolean;

      in_person_location?: string;

      live_stream_recording_url?: string;

      location_type?: string;

      rsvp_count?: number;

      rsvp_disabled?: boolean;

      rsvp_limit?: number;

      send_email_confirmation?: boolean;

      send_email_reminder?: boolean;

      send_in_app_notification_confirmation?: boolean;

      send_in_app_notification_reminder?: boolean;

      starts_at?: string;

      virtual_location_url?: string;
    }

    export interface FirstLikedBy {
      id?: number;

      avatar_url?: string | null;

      headline?: string;

      member_tags?: Array<FirstLikedBy.MemberTag>;

      name?: string;

      rich_text_field_sgid?: string;

      roles?: FirstLikedBy.UnionMember0 | Array<string> | null;
    }

    export namespace FirstLikedBy {
      export interface MemberTag {
        id?: number;

        color?: string;

        custom_emoji_dark_url?: string;

        custom_emoji_url?: string;

        display_format?: string;

        display_locations?: Array<string>;

        emoji?: string;

        is_background_enabled?: boolean;

        is_public?: boolean;

        name?: string;
      }

      export interface UnionMember0 {
        admin?: boolean;

        moderator?: boolean;
      }
    }

    export interface RecurringSettingAttributes {
      ends_at?: string;

      frequency?: string;

      occurrences?: number;

      range_type?: string;
    }

    export interface Space {
      id?: number;

      custom_emoji_dark_url?: string;

      custom_emoji_url?: string;

      emoji?: string | null;

      name?: string;

      slug?: string;
    }

    export interface TiptapBody {
      attachments?: Array<unknown>;

      body?: TiptapBody.Body;

      circle_ios_fallback_text?: string;

      community_members?: Array<TiptapBody.CommunityMember>;

      entities?: Array<unknown>;

      format?: string;

      group_mentions?: Array<unknown>;

      inline_attachments?: Array<unknown>;

      polls?: Array<unknown>;

      sgids_to_object_map?: unknown;
    }

    export namespace TiptapBody {
      export interface Body {
        content?: Array<unknown>;

        type?: string;
      }

      export interface CommunityMember {
        id?: number;

        avatar_url?: string | null;

        headline?: string;

        member_tags?: Array<CommunityMember.MemberTag>;

        name?: string;

        rich_text_field_sgid?: string;

        roles?: CommunityMember.UnionMember0 | Array<string> | null;
      }

      export namespace CommunityMember {
        export interface MemberTag {
          id?: number;

          color?: string;

          custom_emoji_dark_url?: string;

          custom_emoji_url?: string;

          display_format?: string;

          display_locations?: Array<string>;

          emoji?: string;

          is_background_enabled?: boolean;

          is_public?: boolean;

          name?: string;
        }

        export interface UnionMember0 {
          admin?: boolean;

          moderator?: boolean;
        }
      }
    }

    export interface Topic {
      id?: number;

      admin_only?: boolean;

      name?: string;
    }
  }
}

export interface PostDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface PostCreateParams {
  /**
   * Path param: Space ID or slug
   */
  path_space_id: number | string;

  /**
   * Body param:
   */
  body?: string;

  /**
   * Body param:
   */
  cover_image?: string;

  /**
   * Body param:
   */
  is_comments_enabled?: boolean;

  /**
   * Body param:
   */
  is_liking_enabled?: boolean;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  slug?: string;

  /**
   * Body param:
   */
  body_space_id?: number;

  /**
   * Body param:
   */
  tiptap_body?: PostCreateParams.TiptapBody;
}

export namespace PostCreateParams {
  export interface TiptapBody {
    body?: TiptapBody.Body;
  }

  export namespace TiptapBody {
    export interface Body {
      content: Array<Body.Content>;

      type: string;
    }

    export namespace Body {
      export interface Content {
        attrs?: unknown;

        marks?: Array<unknown>;

        text?: string | null;

        type?: string;
      }
    }
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

export namespace Posts {
  export import Post = SpacesPostsAPI.Post;
  export import PostDeleteResponse = SpacesPostsAPI.PostDeleteResponse;
  export import PostCreateParams = SpacesPostsAPI.PostCreateParams;
  export import PostListParams = SpacesPostsAPI.PostListParams;
}
