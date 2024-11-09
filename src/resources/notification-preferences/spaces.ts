// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Spaces extends APIResource {
  /**
   * Update notification preferences for a space member for the provided medium
   */
  update(
    notificationPreferenceMedium: 'in_app' | 'push',
    id: number,
    params: SpaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MediumSpaceNotificationPreferencesUpdate> {
    const { choice } = params;
    return this._client.put(
      `/api/headless/v1/notification_preferences/${notificationPreferenceMedium}/spaces/${id}`,
      { query: { choice }, ...options },
    );
  }
}

export interface MediumSpaceNotificationPreferencesUpdate {
  message?: string;

  success?: boolean;
}

export interface MediumSpaceNotificationPreferencesUpdateAll {
  message?: string;

  success?: boolean;
}

export interface SpaceUpdateParams {
  choice: 'all' | 'never' | 'mention';
}

export declare namespace Spaces {
  export {
    type MediumSpaceNotificationPreferencesUpdate as MediumSpaceNotificationPreferencesUpdate,
    type MediumSpaceNotificationPreferencesUpdateAll as MediumSpaceNotificationPreferencesUpdateAll,
    type SpaceUpdateParams as SpaceUpdateParams,
  };
}
