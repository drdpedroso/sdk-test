// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Home extends APIResource {
  /**
   * Get home space details
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Shared.Space> {
    return this._client.get('/api/headless/v1/spaces/home', options);
  }
}
