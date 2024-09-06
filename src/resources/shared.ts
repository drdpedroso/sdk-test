// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as PostsAPI from './spaces/posts';

export interface Comment {
  id?: number;

  author?: Comment.Author;

  body?: Comment.Body;

  body_text?: string;

  bookmark_id?: number | null;

  community_member_id?: number;

  created_at?: string;

  editor?: string;

  is_liked?: boolean;

  parent_comment_id?: number | null;

  post_id?: number;

  post_name?: string;

  removed_at?: string | null;

  replies?: Array<Comment>;

  replies_count?: number;

  space_id?: number;

  tiptap_body?: Comment.TiptapBody | null;

  topic_id?: number;

  updated_at?: string;

  user_id?: number;

  user_likes_count?: number;
}

export namespace Comment {
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
    attachments?: unknown;

    attachments_array?: Array<unknown>;

    html?: string;
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
}

export interface Comments {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  per_page?: number;

  records?: Array<Comment>;

  sort?: string | null;
}

export interface Posts {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  per_page?: number;

  records?: Array<PostsAPI.Post>;

  sort?: string | null;
}

export interface ProfileUpdateResponse {
  current_community_member?: ProfileUpdateResponse.CurrentCommunityMember;

  message?: string;
}

export namespace ProfileUpdateResponse {
  export interface CurrentCommunityMember {
    id?: number;

    admin?: boolean;

    avatar_url?: string | null;

    community_member_id?: number;

    first_name?: string;

    headline?: string;

    is_deleted?: boolean;

    last_name?: string;

    messaging_enabled?: boolean;

    messaging_enabled_by_admin?: boolean;

    messaging_enabled_by_member?: boolean;

    name?: string;

    profile_fields?: CurrentCommunityMember.ProfileFields;

    public_uid?: string;

    user_attachable_sgid?: string;

    user_id?: number;

    visible_in_member_directory?: boolean;
  }

  export namespace CurrentCommunityMember {
    export interface ProfileFields {
      not_visible?: Array<ProfileFields.NotVisible>;

      visible?: Array<ProfileFields.Visible>;
    }

    export namespace ProfileFields {
      export interface NotVisible {
        id?: number;

        choices?: Array<NotVisible.Choice>;

        community_member_profile_field?: NotVisible.CommunityMemberProfileField;

        created_at?: string;

        description?: string | null;

        field_type?: string;

        key?: string;

        label?: string;

        number_options?: NotVisible.NumberOptions | null;

        placeholder?: string | null;

        platform_field?: boolean;

        required?: boolean;

        updated_at?: string;
      }

      export namespace NotVisible {
        export interface Choice {
          id?: number;

          value?: string;
        }

        export interface CommunityMemberProfileField {
          id?: number;

          community_member_choices?: Array<CommunityMemberProfileField.CommunityMemberChoice>;

          created_at?: string;

          display_value?: string | null;

          text?: string | null;

          textarea?: string | null;

          updated_at?: string;
        }

        export namespace CommunityMemberProfileField {
          export interface CommunityMemberChoice {
            id?: number;

            profile_field_choice?: CommunityMemberChoice.ProfileFieldChoice;
          }

          export namespace CommunityMemberChoice {
            export interface ProfileFieldChoice {
              id?: number;

              value?: string;
            }
          }
        }

        export interface NumberOptions {
          max?: number;

          min?: number;

          step?: number;
        }
      }

      export interface Visible {
        id?: number;

        choices?: Array<Visible.Choice>;

        community_member_profile_field?: Visible.CommunityMemberProfileField;

        created_at?: string;

        description?: string | null;

        field_type?: string;

        key?: string;

        label?: string;

        number_options?: Visible.NumberOptions | null;

        placeholder?: string | null;

        platform_field?: boolean;

        required?: boolean;

        updated_at?: string;
      }

      export namespace Visible {
        export interface Choice {
          id?: number;

          value?: string;
        }

        export interface CommunityMemberProfileField {
          id?: number;

          community_member_choices?: Array<CommunityMemberProfileField.CommunityMemberChoice>;

          created_at?: string;

          display_value?: string | null;

          text?: string | null;

          textarea?: string | null;

          updated_at?: string;
        }

        export namespace CommunityMemberProfileField {
          export interface CommunityMemberChoice {
            id?: number;

            profile_field_choice?: CommunityMemberChoice.ProfileFieldChoice;
          }

          export namespace CommunityMemberChoice {
            export interface ProfileFieldChoice {
              id?: number;

              value?: string;
            }
          }
        }

        export interface NumberOptions {
          max?: number;

          min?: number;

          step?: number;
        }
      }
    }
  }
}

export interface Space {
  id?: number;

  community_id?: number;

  custom_emoji_dark_url?: string;

  custom_emoji_url?: string;

  default_sort?: string | null;

  default_tab?: string;

  display_space_welcome_banner?: boolean;

  display_view?: string;

  emoji?: string | null;

  hide_post_settings?: boolean;

  is_member?: boolean;

  is_post_disabled?: boolean;

  is_private?: boolean;

  name?: string;

  policies?: Space.Policies;

  post_type?: string;

  require_topic_selection?: boolean;

  show_lock_icon_for_non_members?: boolean;

  slug?: string;

  space_group_id?: number;

  space_group_name?: string;

  space_member_id?: number;

  space_type?: string;

  topics_count?: number;

  url?: string;

  visible_tabs?: Space.VisibleTabs;
}

export namespace Space {
  export interface Policies {
    can_create_post?: boolean;

    can_invite_members?: boolean;

    can_leave_space?: boolean;

    can_manage_space?: boolean;

    can_view_space?: boolean;
  }

  export interface VisibleTabs {
    members?: boolean;

    posts?: boolean;
  }
}

export interface UserLikes {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<UserLikes.Record>;
}

export namespace UserLikes {
  export interface Record {
    id?: number;

    avatar_url?: string | null;

    headline?: string;

    member_tags?: Array<Record.MemberTag>;

    name?: string;

    rich_text_field_sgid?: string;

    roles?: Record.UnionMember0 | Array<string> | null;
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
