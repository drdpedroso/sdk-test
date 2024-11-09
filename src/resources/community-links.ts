// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class CommunityLinks extends APIResource {
  /**
   * Get list of community links
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CommunityLinks> {
    return this._client.get('/api/headless/v1/community_links', options);
  }
}

export type CommunityLinks = Array<CommunityLinks.CommunityLinkItem>;

export namespace CommunityLinks {
  export interface CommunityLinkItem {
    id?: number;

    community_id?: number;

    created_at?: string;

    name?: string;

    updated_at?: string;

    url?: string;
  }
}

export declare namespace CommunityLinks {
  export { type CommunityLinks as CommunityLinks };
}
