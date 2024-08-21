// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { Files } from './files';
import { Progress } from './progress';
import * as LessonsAPI from './lessons';
import * as FilesAPI from './files';
import * as ProgressAPI from './progress';

export class Lessons extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  progress: ProgressAPI.Progress = new ProgressAPI.Progress(this._client);

  /**
   * Get a lesson in a course
   */
  retrieve(courseId: number, id: number, options?: Core.RequestOptions): Core.APIPromise<Lesson> {
    return this._client.get(`/api/headless/v1/courses/${courseId}/lessons/${id}`, options);
  }
}

export interface Lesson {
  id?: number;

  autocomplete_on_featured_media_completion?: boolean;

  bookmark_id?: number | null;

  chat_room_uuid?: string;

  dripped_at?: string | null;

  enforce_featured_media_completion?: boolean;

  featured_media?: Lesson.FeaturedMedia;

  featured_media_duration?: number;

  is_comments_enabled?: boolean;

  is_featured_media_download_enabled?: boolean;

  is_featured_media_enabled?: boolean;

  name?: string;

  needs_to_complete_previous_lesson?: boolean;

  progress?: Lesson.Progress;

  rich_text_body?: Lesson.RichTextBody | null;

  section_id?: number;

  space?: Lesson.Space;
}

export namespace Lesson {
  export interface FeaturedMedia {
    byte_size?: number;

    content_type?: string;

    filename?: string;

    image_variants?: FeaturedMedia.ImageVariants;

    metadata?: FeaturedMedia.Metadata;

    signed_id?: string;

    type?: string;

    url?: string;

    webvtt_file_url?: string | null;
  }

  export namespace FeaturedMedia {
    export interface ImageVariants {
      thumbnail?: string;
    }

    export interface Metadata {
      analyzed?: boolean;

      duration?: number;

      height?: number;

      identified?: boolean;

      width?: number;
    }
  }

  export interface Progress {
    status?: string;
  }

  export interface RichTextBody {
    attachments?: Array<unknown>;

    body?: RichTextBody.Body;

    circle_ios_fallback_text?: string;

    community_members?: Array<unknown>;

    entities?: Array<unknown>;

    format?: string;

    group_mentions?: Array<unknown>;

    inline_attachments?: Array<unknown>;

    polls?: Array<unknown>;

    sgids_to_object_map?: unknown;
  }

  export namespace RichTextBody {
    export interface Body {
      content?: Array<Body.Content>;

      type?: string;
    }

    export namespace Body {
      export interface Content {
        content: Array<Content.Content>;

        type: string;
      }

      export namespace Content {
        export interface Content {
          type: string;

          attrs?: Content.Attrs;

          circle_ios_fallback_text?: string | null;

          marks?: Array<Content.Mark> | null;

          text?: string | null;
        }

        export namespace Content {
          export interface Attrs {
            sgid: string;

            href?: string | null;

            target?: string | null;
          }

          export interface Mark {
            attrs?: Mark.Attrs;

            type?: string;
          }

          export namespace Mark {
            export interface Attrs {
              href?: string;

              target?: string;
            }
          }
        }
      }
    }
  }

  export interface Space {
    id?: number;

    name?: string;

    slug?: string;
  }
}

export interface LessonFiles {
  count?: number;

  has_next_page?: boolean;

  page?: number;

  page_count?: number;

  per_page?: number;

  records?: Array<LessonFiles.Record>;
}

export namespace LessonFiles {
  export interface Record {
    id?: number;

    byte_size?: number;

    content_type?: string;

    created_at?: string;

    filename?: string;

    signed_id?: string;

    type?: string;

    url?: string;
  }
}

export namespace Lessons {
  export import Lesson = LessonsAPI.Lesson;
  export import LessonFiles = LessonsAPI.LessonFiles;
  export import Files = FilesAPI.Files;
  export import FileListParams = FilesAPI.FileListParams;
  export import Progress = ProgressAPI.Progress;
  export import ProgressUpdateResponse = ProgressAPI.ProgressUpdateResponse;
  export import ProgressUpdateParams = ProgressAPI.ProgressUpdateParams;
}
