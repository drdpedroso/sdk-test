// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as LessonsAPI from './lessons';

export class Files extends APIResource {
  /**
   * Get list of files in a lesson
   */
  list(
    courseId: number,
    lessonId: number,
    query?: FileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LessonsAPI.LessonFiles>;
  list(
    courseId: number,
    lessonId: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LessonsAPI.LessonFiles>;
  list(
    courseId: number,
    lessonId: number,
    query: FileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LessonsAPI.LessonFiles> {
    if (isRequestOptions(query)) {
      return this.list(courseId, lessonId, {}, query);
    }
    return this._client.get(`/api/headless/v1/courses/${courseId}/lessons/${lessonId}/files`, {
      query,
      ...options,
    });
  }
}

export interface FileListParams {
  /**
   * Page number
   */
  page?: number;

  /**
   * Number of records per page
   */
  per_page?: number;
}

export declare namespace Files {
  export { type FileListParams as FileListParams };
}
