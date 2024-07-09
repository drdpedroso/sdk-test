// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CommunityMemberAPI from './community-member';

export class CommunityMember extends APIResource {
  /**
   * Get current community member details
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<CurrentCommunityMember> {
    return this._client.get('/api/headless/v1/community_member', options);
  }

  /**
   * Deactivate a non-admin and non-owner community member
   */
  deactivate(options?: Core.RequestOptions): Core.APIPromise<MemberDeactivated> {
    return this._client.delete('/api/headless/v1/community_member/deactivate', options);
  }
}

export interface CurrentCommunityMember {
  id?: number;

  active?: boolean;

  avatar_url?: string | null;

  bio?: string;

  bookmarks_count?: number;

  comments_count?: number;

  default_space_id?: number;

  features?: CurrentCommunityMember.Features;

  headline?: string;

  large_avatar_url?: string | null;

  live_stream_limits?: CurrentCommunityMember.LiveStreamLimits;

  member_tags?: Array<CurrentCommunityMember.MemberTag>;

  mobile_home_segments?: Array<CurrentCommunityMember.MobileHomeSegment>;

  name?: string;

  posts_count?: number;

  profile_fields?: CurrentCommunityMember.ProfileFields;

  profile_info?: CurrentCommunityMember.ProfileInfo;

  public_uid?: string;

  roles?: CurrentCommunityMember.Roles;

  spaces_count?: number;

  user_id?: number;
}

export namespace CurrentCommunityMember {
  export interface Features {
    can_create_live_streams?: boolean;

    chat_reactions_enabled?: boolean;

    chat_threads_enabled?: boolean;

    chat_threads_in_live_and_courses_enabled?: boolean;

    display_home_page?: boolean;

    edit_and_delete_messages_enabled?: boolean;

    messaging_enabled?: boolean;

    profile_fields_feature_flag_enabled?: boolean;

    tiptap_comments_enabled?: boolean;

    tiptap_webview_editor_enabled?: boolean;

    voice_messages_enabled?: boolean;
  }

  export interface LiveStreamLimits {
    live_room_participants_capacity?: number;

    live_stream_max_host_capacity?: number;

    live_stream_max_spectator_capacity?: number;

    live_stream_monthly_stream_hours?: number;

    live_stream_recording_hours?: number;
  }

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

    text_color?: string;
  }

  export interface MobileHomeSegment {
    id?: number;

    kind?: string;
  }

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

  export interface ProfileInfo {
    facebook_url?: string | null;

    instagram_url?: string | null;

    linkedin_url?: string | null;

    location?: string | null;

    twitter_url?: string | null;

    website?: string | null;
  }

  export interface Roles {
    admin?: boolean;

    moderator?: boolean;
  }
}

export interface MemberDeactivated {
  success?: boolean;
}

export namespace CommunityMember {
  export import CurrentCommunityMember = CommunityMemberAPI.CurrentCommunityMember;
  export import MemberDeactivated = CommunityMemberAPI.MemberDeactivated;
}
