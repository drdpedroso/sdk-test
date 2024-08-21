// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as PublicProfileAPI from './public-profile';

export class PublicProfileResource extends APIResource {
  /**
   * Get public profile details for a community member ID
   */
  retrieve(communityMemberId: number, options?: Core.RequestOptions): Core.APIPromise<PublicProfile> {
    return this._client.get(`/api/headless/v1/community_members/${communityMemberId}/public_profile`, options);
  }
}

export interface PublicProfile {
  id?: number;

  avatar_url?: string | null;

  bio?: string;

  can_receive_dm_from_current_member?: boolean;

  comments_count?: number;

  email?: string;

  headline?: string;

  large_avatar_url?: string | null;

  member_tags?: Array<PublicProfile.MemberTag>;

  messaging_enabled?: boolean;

  name?: string;

  posts_count?: number;

  profile_info?: PublicProfile.ProfileInfo;

  roles?: PublicProfile.Roles;

  spaces_count?: number;
}

export namespace PublicProfile {
  export interface MemberTag {
    id?: number;

    color?: string;

    custom_emoji_dark_url?: string;

    custom_emoji_url?: string;

    display_format?: string;

    display_locations?: Array<string>;

    email?: string;

    headline?: string;

    is_background_enabled?: boolean;

    is_public?: boolean;

    name?: string;
  }

  export interface ProfileInfo {
    facebook_url?: string;

    instagram_url?: string;

    linkedin_url?: string;

    location?: string;

    twitter_url?: string;

    website?: string;
  }

  export interface Roles {
    admin?: boolean;

    moderator?: boolean;
  }
}

export namespace PublicProfileResource {
  export import PublicProfile = PublicProfileAPI.PublicProfile;
}
