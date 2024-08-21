// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as SpaceMembersAPI from './space-members';

export class SpaceMembers extends APIResource {
  /**
   * Mark space member messages as read
   */
  markAsRead(id: number, options?: Core.RequestOptions): Core.APIPromise<SpaceMemberMarkAsReadResponse> {
    return this._client.post(`/api/headless/v1/space_members/${id}/mark_as_read`, options);
  }
}

export interface SpaceMemberMarkAsReadResponse {
  success: boolean;
}

export namespace SpaceMembers {
  export import SpaceMemberMarkAsReadResponse = SpaceMembersAPI.SpaceMemberMarkAsReadResponse;
}
