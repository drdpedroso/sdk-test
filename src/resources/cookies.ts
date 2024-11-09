// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Cookies extends APIResource {
  /**
   * Create cookies
   */
  create(options?: Core.RequestOptions): Core.APIPromise<CookiesGenerated> {
    return this._client.post('/api/headless/v1/cookies', options);
  }

  /**
   * Destroy cookies
   */
  delete(options?: Core.RequestOptions): Core.APIPromise<CookiesDestroyed> {
    return this._client.delete('/api/headless/v1/cookies', options);
  }
}

export interface CookiesDestroyed {
  message?: string;
}

export interface CookiesGenerated {
  message?: string;
}

export declare namespace Cookies {
  export { type CookiesDestroyed as CookiesDestroyed, type CookiesGenerated as CookiesGenerated };
}
