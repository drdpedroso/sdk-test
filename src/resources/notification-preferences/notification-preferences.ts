// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as NotificationPreferencesAPI from './notification-preferences';
import * as SpaceMembersAPI from './space-members';
import * as SpacesAPI from './spaces';

export class NotificationPreferences extends APIResource {
  spaceMembers: SpaceMembersAPI.SpaceMembers = new SpaceMembersAPI.SpaceMembers(this._client);
  spaces: SpacesAPI.Spaces = new SpacesAPI.Spaces(this._client);

  /**
   * Get notification preferences for a medium
   */
  retrieve(
    medium: 'in_app' | 'push',
    options?: Core.RequestOptions,
  ): Core.APIPromise<MediumNotificationPreferences> {
    return this._client.get(`/api/headless/v1/notification_preferences/${medium}`, options);
  }

  /**
   * Update notification preferences for a medium
   */
  update(
    medium: 'in_app' | 'push',
    params: NotificationPreferenceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MediumNotificationPreferencesUpdate> {
    const { enabled, type } = params;
    return this._client.put(`/api/headless/v1/notification_preferences/${medium}`, {
      query: { enabled, type },
      ...options,
    });
  }
}

export interface MediumNotificationPreferences {
  notification_preference?: Array<MediumNotificationPreferences.NotificationPreference>;

  space_preferences?: Array<MediumNotificationPreferences.SpacePreference>;
}

export namespace MediumNotificationPreferences {
  export interface NotificationPreference {
    enabled?: boolean;

    name?: string;

    type?: number;
  }

  export interface SpacePreference {
    id?: number;

    choice?: string;

    is_chat_space?: boolean;

    space_id?: number;

    space_name?: string;
  }
}

export interface MediumNotificationPreferencesUpdate {
  message?: string;

  success?: boolean;
}

export interface NotificationPreferenceUpdateParams {
  enabled: boolean;

  type:
    | 'post_comment'
    | 'comment_reply'
    | 'mention'
    | 'direct_messages'
    | 'post_like'
    | 'comment_like'
    | 'new_course_content';
}

export namespace NotificationPreferences {
  export import MediumNotificationPreferences = NotificationPreferencesAPI.MediumNotificationPreferences;
  export import MediumNotificationPreferencesUpdate = NotificationPreferencesAPI.MediumNotificationPreferencesUpdate;
  export import NotificationPreferenceUpdateParams = NotificationPreferencesAPI.NotificationPreferenceUpdateParams;
  export import SpaceMembers = SpaceMembersAPI.SpaceMembers;
  export import SpaceMemberNotificationPreferences = SpaceMembersAPI.SpaceMemberNotificationPreferences;
  export import Spaces = SpacesAPI.Spaces;
  export import MediumSpaceNotificationPreferencesUpdate = SpacesAPI.MediumSpaceNotificationPreferencesUpdate;
  export import MediumSpaceNotificationPreferencesUpdateAll = SpacesAPI.MediumSpaceNotificationPreferencesUpdateAll;
  export import SpaceUpdateParams = SpacesAPI.SpaceUpdateParams;
}
