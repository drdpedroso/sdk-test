// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as HomePageAPI from './home-page';
import * as Shared from './shared';

export class HomePage extends APIResource {
  /**
   * Get home page posts
   */
  retrieve(query?: HomePageRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.Posts>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Shared.Posts>;
  retrieve(
    query: HomePageRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.Posts> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/api/headless/v1/home', { query, ...options });
  }
}

export interface HomePageRetrieveParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;

  /**
   * Sort order
   */
  sort?: 'latest' | 'popular' | 'oldest' | 'likes' | 'alphabetical' | 'new_activity';
}

export namespace HomePage {
  export import HomePageRetrieveParams = HomePageAPI.HomePageRetrieveParams;
}
