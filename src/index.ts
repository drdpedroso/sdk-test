// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AdvancedSearch,
  AdvancedSearchResults,
  AdvancedSearchSearchParams,
} from './resources/advanced-search';
import { Bookmark, BookmarkCreateParams, BookmarkListParams, Bookmarks } from './resources/bookmarks';
import { CommunityLinks } from './resources/community-links';
import { Cookies, CookiesDestroyed, CookiesGenerated } from './resources/cookies';
import {
  FlaggedContentCreateParams,
  FlaggedContentCreateResponse,
  FlaggedContents,
} from './resources/flagged-contents';
import { HomePage, HomePageRetrieveParams } from './resources/home-page';
import { InvitationLinkJoinResponse, InvitationLinks } from './resources/invitation-links';
import {
  NewNotificationsCount,
  Notification,
  NotificationListParams,
  NotificationMarkAllAsReadParams,
  Notifications,
  ResetNewNotificationsCount,
} from './resources/notifications';
import { Profile, ProfileUpdateParams } from './resources/profile';
import { CreateReactionResponse, ReactionCreateParams, Reactions } from './resources/reactions';
import { Search, SearchListParams, SearchResults } from './resources/search';
import { SpaceMemberMarkAsReadResponse, SpaceMembers } from './resources/space-members';
import {
  SpaceNotificationDetailListParams,
  SpaceNotificationDetails,
} from './resources/space-notification-details';
import {
  ChatRoom,
  ChatRoomCreateParams,
  ChatRoomListParams,
  ChatRooms,
  Empty,
} from './resources/chat-rooms/chat-rooms';
import { ChatThread, ChatThreadListParams, ChatThreads } from './resources/chat-threads/chat-threads';
import { Comments } from './resources/comments/comments';
import {
  CommunityMemberListParams,
  CommunityMembers,
  CurrentCommunityMember,
  MemberDeactivated,
} from './resources/community-members/community-members';
import { Courses } from './resources/courses/courses';
import { Events } from './resources/events/events';
import { LiveStreams } from './resources/live-streams/live-streams';
import { Messages } from './resources/messages/messages';
import {
  MediumNotificationPreferences,
  MediumNotificationPreferencesUpdate,
  NotificationPreferenceUpdateParams,
  NotificationPreferences,
} from './resources/notification-preferences/notification-preferences';
import { ImagePost, PostCreateParams, PostUpdateParams, Posts } from './resources/posts/posts';
import { Signup } from './resources/signup/signup';
import { Spaces } from './resources/spaces/spaces';

export interface ClientOptions {
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['HEADLESS_CLIENT_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Headless Client SDK API.
 */
export class HeadlessClientSDK extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Headless Client SDK API.
   *
   * @param {string} [opts.baseURL=process.env['HEADLESS_CLIENT_SDK_BASE_URL'] ?? https://{defaultHost}] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('HEADLESS_CLIENT_SDK_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL: baseURL || `https://{defaultHost}`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  advancedSearch: API.AdvancedSearch = new API.AdvancedSearch(this);
  bookmarks: API.Bookmarks = new API.Bookmarks(this);
  messages: API.Messages = new API.Messages(this);
  chatRooms: API.ChatRooms = new API.ChatRooms(this);
  chatThreads: API.ChatThreads = new API.ChatThreads(this);
  posts: API.Posts = new API.Posts(this);
  communityLinks: API.CommunityLinks = new API.CommunityLinks(this);
  communityMembers: API.CommunityMembers = new API.CommunityMembers(this);
  cookies: API.Cookies = new API.Cookies(this);
  courses: API.Courses = new API.Courses(this);
  events: API.Events = new API.Events(this);
  flaggedContents: API.FlaggedContents = new API.FlaggedContents(this);
  homePage: API.HomePage = new API.HomePage(this);
  invitationLinks: API.InvitationLinks = new API.InvitationLinks(this);
  liveStreams: API.LiveStreams = new API.LiveStreams(this);
  notificationPreferences: API.NotificationPreferences = new API.NotificationPreferences(this);
  notifications: API.Notifications = new API.Notifications(this);
  spaces: API.Spaces = new API.Spaces(this);
  profile: API.Profile = new API.Profile(this);
  reactions: API.Reactions = new API.Reactions(this);
  comments: API.Comments = new API.Comments(this);
  search: API.Search = new API.Search(this);
  signup: API.Signup = new API.Signup(this);
  spaceMembers: API.SpaceMembers = new API.SpaceMembers(this);
  spaceNotificationDetails: API.SpaceNotificationDetails = new API.SpaceNotificationDetails(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static HeadlessClientSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static HeadlessClientSDKError = Errors.HeadlessClientSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  HeadlessClientSDKError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

HeadlessClientSDK.AdvancedSearch = AdvancedSearch;
HeadlessClientSDK.Messages = Messages;
HeadlessClientSDK.Posts = Posts;
HeadlessClientSDK.Cookies = Cookies;
HeadlessClientSDK.Courses = Courses;
HeadlessClientSDK.Events = Events;
HeadlessClientSDK.FlaggedContents = FlaggedContents;
HeadlessClientSDK.HomePage = HomePage;
HeadlessClientSDK.InvitationLinks = InvitationLinks;
HeadlessClientSDK.LiveStreams = LiveStreams;
HeadlessClientSDK.NotificationPreferences = NotificationPreferences;
HeadlessClientSDK.Profile = Profile;
HeadlessClientSDK.Reactions = Reactions;
HeadlessClientSDK.Comments = Comments;
HeadlessClientSDK.Search = Search;
HeadlessClientSDK.Signup = Signup;
HeadlessClientSDK.SpaceMembers = SpaceMembers;

export declare namespace HeadlessClientSDK {
  export type RequestOptions = Core.RequestOptions;

  export {
    AdvancedSearch as AdvancedSearch,
    type AdvancedSearchResults as AdvancedSearchResults,
    type AdvancedSearchSearchParams as AdvancedSearchSearchParams,
  };

  export {
    type Bookmarks as Bookmarks,
    type Bookmark as Bookmark,
    type BookmarkCreateParams as BookmarkCreateParams,
    type BookmarkListParams as BookmarkListParams,
  };

  export { Messages as Messages };

  export {
    type ChatRooms as ChatRooms,
    type ChatRoom as ChatRoom,
    type Empty as Empty,
    type ChatRoomCreateParams as ChatRoomCreateParams,
    type ChatRoomListParams as ChatRoomListParams,
  };

  export {
    type ChatThreads as ChatThreads,
    type ChatThread as ChatThread,
    type ChatThreadListParams as ChatThreadListParams,
  };

  export {
    Posts as Posts,
    type ImagePost as ImagePost,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
  };

  export { type CommunityLinks as CommunityLinks };

  export {
    type CommunityMembers as CommunityMembers,
    type CurrentCommunityMember as CurrentCommunityMember,
    type MemberDeactivated as MemberDeactivated,
    type CommunityMemberListParams as CommunityMemberListParams,
  };

  export {
    Cookies as Cookies,
    type CookiesDestroyed as CookiesDestroyed,
    type CookiesGenerated as CookiesGenerated,
  };

  export { Courses as Courses };

  export { Events as Events };

  export {
    FlaggedContents as FlaggedContents,
    type FlaggedContentCreateResponse as FlaggedContentCreateResponse,
    type FlaggedContentCreateParams as FlaggedContentCreateParams,
  };

  export { HomePage as HomePage, type HomePageRetrieveParams as HomePageRetrieveParams };

  export {
    InvitationLinks as InvitationLinks,
    type InvitationLinkJoinResponse as InvitationLinkJoinResponse,
  };

  export { LiveStreams as LiveStreams };

  export {
    NotificationPreferences as NotificationPreferences,
    type MediumNotificationPreferences as MediumNotificationPreferences,
    type MediumNotificationPreferencesUpdate as MediumNotificationPreferencesUpdate,
    type NotificationPreferenceUpdateParams as NotificationPreferenceUpdateParams,
  };

  export {
    type Notifications as Notifications,
    type NewNotificationsCount as NewNotificationsCount,
    type Notification as Notification,
    type ResetNewNotificationsCount as ResetNewNotificationsCount,
    type NotificationListParams as NotificationListParams,
    type NotificationMarkAllAsReadParams as NotificationMarkAllAsReadParams,
  };

  export { type Spaces as Spaces };

  export { Profile as Profile, type ProfileUpdateParams as ProfileUpdateParams };

  export {
    Reactions as Reactions,
    type CreateReactionResponse as CreateReactionResponse,
    type ReactionCreateParams as ReactionCreateParams,
  };

  export { Comments as Comments };

  export { Search as Search, type SearchResults as SearchResults, type SearchListParams as SearchListParams };

  export { Signup as Signup };

  export {
    SpaceMembers as SpaceMembers,
    type SpaceMemberMarkAsReadResponse as SpaceMemberMarkAsReadResponse,
  };

  export {
    type SpaceNotificationDetails as SpaceNotificationDetails,
    type SpaceNotificationDetailListParams as SpaceNotificationDetailListParams,
  };

  export type Comment = API.Comment;
  export type Comments = API.Comments;
  export type Posts = API.Posts;
  export type ProfileUpdateResponse = API.ProfileUpdateResponse;
  export type Space = API.Space;
  export type UserLikes = API.UserLikes;
}

export default HeadlessClientSDK;
