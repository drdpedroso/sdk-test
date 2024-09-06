// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SpaceMembersAPI from './space-members';

export class SpaceMembers extends APIResource {
  /**
   * Get space notification preferences for the provided space member ID
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SpaceMemberNotificationPreferences> {
    return this._client.get(`/api/headless/v1/notification_preferences/space_members/${id}`, options);
  }
}

export interface SpaceMemberNotificationPreferences {
  in_app?: string;

  push?: string;
}

export namespace SpaceMembers {
  export import SpaceMemberNotificationPreferences = SpaceMembersAPI.SpaceMemberNotificationPreferences;
}
