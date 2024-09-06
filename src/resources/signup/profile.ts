// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ProfileAPI from './profile';
import * as Shared from '../shared';

export class Profile extends APIResource {
  /**
   * Update and confirm community member profile
   */
  update(
    body?: ProfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ProfileUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<Shared.ProfileUpdateResponse>;
  update(
    body: ProfileUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ProfileUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/api/headless/v1/signup/profile', { body, ...options });
  }
}

export interface ProfileUpdateParams {
  community_member?: ProfileUpdateParams.CommunityMember;
}

export namespace ProfileUpdateParams {
  export interface CommunityMember {
    avatar?: string;

    community_member_profile_fields_attributes?: Array<CommunityMember.CommunityMemberProfileFieldsAttribute>;

    headline?: string;

    name?: string;

    preferences?: CommunityMember.Preferences;

    time_zone?: string;
  }

  export namespace CommunityMember {
    export interface CommunityMemberProfileFieldsAttribute {
      id?: number;

      community_member_choices_attributes?: Array<CommunityMemberProfileFieldsAttribute.CommunityMemberChoicesAttribute>;

      profile_field_id?: number;

      text?: string;

      textarea?: string;
    }

    export namespace CommunityMemberProfileFieldsAttribute {
      export interface CommunityMemberChoicesAttribute {
        id?: number;

        _destroy?: boolean;

        profile_field_choice_id?: number;
      }
    }

    export interface Preferences {
      make_my_email_public?: boolean;

      messaging_enabled?: boolean;

      visible_in_member_directory?: boolean;
    }
  }
}

export namespace Profile {
  export import ProfileUpdateParams = ProfileAPI.ProfileUpdateParams;
}
