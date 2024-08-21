// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SectionsAPI from './sections';

export class Sections extends APIResource {
  /**
   * Get list of sections in a course
   */
  list(courseId: number, options?: Core.RequestOptions): Core.APIPromise<Sections> {
    return this._client.get(`/api/headless/v1/courses/${courseId}/sections`, options);
  }
}

export type Sections = Array<Sections.SectionItem>

export namespace Sections {
  export interface SectionItem {
    id?: number;

    drip_delay?: number;

    dripped_at?: string | null;

    is_dropped?: boolean;

    lessons?: Array<SectionItem.Lesson>;

    name?: string;

    notify_students_enabled?: boolean;
  }

  export namespace SectionItem {
    export interface Lesson {
      id?: number;

      dripped_at?: string | null;

      featured_media_duration?: number | null;

      is_featured_media_enabled?: boolean;

      name?: string;

      needs_to_complete_previous_lesson?: boolean;

      progress?: Lesson.Progress;
    }

    export namespace Lesson {
      export interface Progress {
        status?: string;
      }
    }
  }
}

export namespace Sections {
  export import Sections = SectionsAPI.Sections;
}
