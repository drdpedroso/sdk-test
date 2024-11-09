// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as BookmarksAPI from './bookmarks';
import { BookmarkListParams, Bookmarks, SpaceBookmarks } from './bookmarks';
import * as HomeAPI from './home';
import { Home } from './home';
import * as PostsAPI from './posts';
import { Post, PostCreateParams, PostDeleteResponse, PostListParams, Posts } from './posts';
import * as EventsAPI from './events/events';
import { Events } from './events/events';

export class Spaces extends APIResource {
  posts: PostsAPI.Posts = new PostsAPI.Posts(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  bookmarks: BookmarksAPI.Bookmarks = new BookmarksAPI.Bookmarks(this._client);
  home: HomeAPI.Home = new HomeAPI.Home(this._client);

  /**
   * Get space details
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Space> {
    return this._client.get(`/api/headless/v1/spaces/${id}`, options);
  }

  /**
   * Get list of spaces
   */
  list(options?: Core.RequestOptions): Core.APIPromise<Spaces> {
    return this._client.get('/api/headless/v1/spaces', options);
  }

  /**
   * Join a space by id
   */
  join(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Space> {
    return this._client.post(`/api/headless/v1/spaces/${id}/join`, options);
  }

  /**
   * Leave a space by id
   */
  leave(id: number, options?: Core.RequestOptions): Core.APIPromise<Shared.Space> {
    return this._client.post(`/api/headless/v1/spaces/${id}/leave`, options);
  }
}

export type Spaces = Array<Shared.Space>;

Spaces.Posts = Posts;
Spaces.Events = Events;
Spaces.Bookmarks = Bookmarks;
Spaces.Home = Home;

export declare namespace Spaces {
  export { type Spaces as Spaces };

  export {
    Posts as Posts,
    type Post as Post,
    type PostDeleteResponse as PostDeleteResponse,
    type PostCreateParams as PostCreateParams,
    type PostListParams as PostListParams,
  };

  export { Events as Events };

  export {
    Bookmarks as Bookmarks,
    type SpaceBookmarks as SpaceBookmarks,
    type BookmarkListParams as BookmarkListParams,
  };

  export { Home as Home };
}
