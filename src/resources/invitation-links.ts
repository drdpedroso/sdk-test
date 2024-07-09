// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as InvitationLinksAPI from './invitation-links';

export class InvitationLinks extends APIResource {
  /**
   * Join community using invitation link
   */
  join(token: string, options?: Core.RequestOptions): Core.APIPromise<InvitationLinkJoinResponse> {
    return this._client.post(`/api/headless/v1/invitation_links/${token}/join`, options);
  }
}

export interface InvitationLinkJoinResponse {
  redirect_to_space_id?: number | null;
}

export namespace InvitationLinks {
  export import InvitationLinkJoinResponse = InvitationLinksAPI.InvitationLinkJoinResponse;
}
