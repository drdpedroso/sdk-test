// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Comments } from './comments';
import { PostFollowers } from './post-followers';
import { UserLikes } from './user-likes';
import * as PostsAPI from './posts';
import * as CommentsAPI from './comments';
import * as PostFollowersAPI from './post-followers';
import * as UserLikesAPI from './user-likes';

export class Posts extends APIResource {
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  postFollowers: PostFollowersAPI.PostFollowers = new PostFollowersAPI.PostFollowers(this._client);
  userLikes: UserLikesAPI.UserLikes = new UserLikesAPI.UserLikes(this._client);

  /**
   * Create an image post
   */
  create(params: PostCreateParams, options?: Core.RequestOptions): Core.APIPromise<ImagePost> {
    const { path_space_id, body_space_id, ...body } = params;
    return this._client.post(`/api/headless/v1/spaces/${path_space_id}/images/posts`, { body: { space_id: body_space_id, ...body }, ...options });
  }

  /**
   * Update an image post
   */
  update(id: number | string, params: PostUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ImagePost> {
    const { path_space_id, body_space_id, ...body } = params;
    return this._client.put(`/api/headless/v1/spaces/${path_space_id}/images/posts/${id}`, { body: { space_id: body_space_id, ...body }, ...options });
  }
}

export interface ImagePost {
  id?: number;

  action?: ImagePost.Action;

  author?: ImagePost.Author;

  body?: ImagePost.Body | null;

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

  first_liked_by?: Array<ImagePost.FirstLikedBy>;

  gallery?: ImagePost.Gallery;

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

  space?: ImagePost.Space;

  space_type?: string;

  status?: string;

  tiptap_body?: ImagePost.TiptapBody | null;

  topic_follower_id?: number | null;

  topics?: Array<ImagePost.Topic>;

  updated_at?: string;

  url?: string;

  user_likes_count?: number;
}

export namespace ImagePost {
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

  export interface Gallery {
    id?: number;

    downloadable_images?: boolean;

    images?: Array<Gallery.Image>;
  }

  export namespace Gallery {
    export interface Image {
      id?: number;

      filename?: string;

      height?: number;

      signed_id?: string;

      url?: string;

      width?: number;
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

export interface PostCreateParams {
  /**
   * Path param: Space ID
   */
  path_space_id: number | string;

  /**
   * Body param:
   */
  gallery_attributes?: PostCreateParams.GalleryAttributes;

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
  export interface GalleryAttributes {
    images_attributes?: Array<GalleryAttributes.ImagesAttribute>;
  }

  export namespace GalleryAttributes {
    export interface ImagesAttribute {
      id?: number;

      height?: number;

      signed_id?: string;

      width?: number;
    }
  }

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

export interface PostUpdateParams {
  /**
   * Path param: Space ID
   */
  path_space_id: number | string;

  /**
   * Body param:
   */
  gallery_attributes?: PostUpdateParams.GalleryAttributes;

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
  slug?: string;

  /**
   * Body param:
   */
  body_space_id?: number;

  /**
   * Body param:
   */
  tiptap_body?: PostUpdateParams.TiptapBody;
}

export namespace PostUpdateParams {
  export interface GalleryAttributes {
    images_attributes?: Array<GalleryAttributes.ImagesAttribute>;
  }

  export namespace GalleryAttributes {
    export interface ImagesAttribute {
      id?: number;

      image?: string;

      position?: number;
    }
  }

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

export namespace Posts {
  export import ImagePost = PostsAPI.ImagePost;
  export import PostCreateParams = PostsAPI.PostCreateParams;
  export import PostUpdateParams = PostsAPI.PostUpdateParams;
  export import Comments = CommentsAPI.Comments;
  export import CommentRemoveResponse = CommentsAPI.CommentRemoveResponse;
  export import CommentCreateParams = CommentsAPI.CommentCreateParams;
  export import CommentListParams = CommentsAPI.CommentListParams;
  export import PostFollowers = PostFollowersAPI.PostFollowers;
  export import PostFollowerCreateResponse = PostFollowersAPI.PostFollowerCreateResponse;
  export import PostFollowerDeleteResponse = PostFollowersAPI.PostFollowerDeleteResponse;
  export import UserLikes = UserLikesAPI.UserLikes;
  export import UserLikeCreateResponse = UserLikesAPI.UserLikeCreateResponse;
  export import UserLikeDeleteResponse = UserLikesAPI.UserLikeDeleteResponse;
  export import UserLikeListParams = UserLikesAPI.UserLikeListParams;
}
