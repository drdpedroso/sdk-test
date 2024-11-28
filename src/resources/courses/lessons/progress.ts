// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Progress extends APIResource {
  /**
   * Update a lesson progress
   */
  update(
    courseId: number,
    lessonId: number,
    body: ProgressUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProgressUpdateResponse> {
    return this._client.patch(`/api/headless/v1/courses/${courseId}/lessons/${lessonId}/progress`, {
      body,
      ...options,
    });
  }
}

export interface ProgressUpdateResponse {
  status?: string;
}

export interface ProgressUpdateParams {
  status: 'incomplete' | 'completed';
}

export declare namespace Progress {
  export {
    type ProgressUpdateResponse as ProgressUpdateResponse,
    type ProgressUpdateParams as ProgressUpdateParams,
  };
}
