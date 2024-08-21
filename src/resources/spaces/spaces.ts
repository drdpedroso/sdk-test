// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Posts } from './posts';
import { Events } from './events/events';
import { Bookmarks } from './bookmarks';
import { Home } from './home';
import * as SpacesAPI from './spaces';
import * as Shared from '../shared';
import * as BookmarksAPI from './bookmarks';
import * as HomeAPI from './home';
import * as PostsAPI from './posts';
import * as EventsAPI from './events/events';

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

export type Spaces = Array<Shared.Space>

export namespace Spaces {
  export import Spaces = SpacesAPI.Spaces;
  export import Posts = PostsAPI.Posts;
  export import Post = PostsAPI.Post;
  export import PostDeleteResponse = PostsAPI.PostDeleteResponse;
  export import PostCreateParams = PostsAPI.PostCreateParams;
  export import PostListParams = PostsAPI.PostListParams;
  export import Events = EventsAPI.Events;
  export import Bookmarks = BookmarksAPI.Bookmarks;
  export import SpaceBookmarks = BookmarksAPI.SpaceBookmarks;
  export import BookmarkListParams = BookmarksAPI.BookmarkListParams;
  export import Home = HomeAPI.Home;
}
