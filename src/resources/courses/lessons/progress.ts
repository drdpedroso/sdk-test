// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as ProgressAPI from './progress';

export class Progress extends APIResource {
  /**
   * Update a lesson progress
   */
  update(courseId: number, lessonId: number, body: ProgressUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProgressUpdateResponse> {
    return this._client.patch(`/api/headless/v1/courses/${courseId}/lessons/${lessonId}/progress`, { body, ...options });
  }
}

export interface ProgressUpdateResponse {
  status?: string;
}

export interface ProgressUpdateParams {
  status: 'incomplete' | 'completed';
}

export namespace Progress {
  export import ProgressUpdateResponse = ProgressAPI.ProgressUpdateResponse;
  export import ProgressUpdateParams = ProgressAPI.ProgressUpdateParams;
}
