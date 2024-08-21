// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Lessons } from './lessons/lessons';
import { Sections } from './sections';
import * as SectionsAPI from './sections';
import * as LessonsAPI from './lessons/lessons';

export class Courses extends APIResource {
  lessons: LessonsAPI.Lessons = new LessonsAPI.Lessons(this._client);
  sections: SectionsAPI.Sections = new SectionsAPI.Sections(this._client);
}

export namespace Courses {
  export import Lessons = LessonsAPI.Lessons;
  export import Lesson = LessonsAPI.Lesson;
  export import LessonFiles = LessonsAPI.LessonFiles;
  export import Sections = SectionsAPI.Sections;
}
