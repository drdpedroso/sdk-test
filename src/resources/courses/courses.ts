// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SectionsAPI from './sections';
import { Sections } from './sections';
import * as LessonsAPI from './lessons/lessons';
import { Lesson, LessonFiles, Lessons } from './lessons/lessons';

export class Courses extends APIResource {
  lessons: LessonsAPI.Lessons = new LessonsAPI.Lessons(this._client);
  sections: SectionsAPI.Sections = new SectionsAPI.Sections(this._client);
}

Courses.Lessons = Lessons;

export declare namespace Courses {
  export { Lessons as Lessons, type Lesson as Lesson, type LessonFiles as LessonFiles };

  export { type Sections as Sections };
}
