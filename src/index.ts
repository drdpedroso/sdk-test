// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from 'qs';
import * as Core from './core';
import * as API from './resources/index';

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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace HeadlessClientSDK {
  export import RequestOptions = Core.RequestOptions;

  export import AdvancedSearch = API.AdvancedSearch;
  export import AdvancedSearchResults = API.AdvancedSearchResults;
  export import AdvancedSearchSearchParams = API.AdvancedSearchSearchParams;

  export import Bookmarks = API.Bookmarks;
  export import Bookmark = API.Bookmark;
  export import BookmarkCreateParams = API.BookmarkCreateParams;
  export import BookmarkListParams = API.BookmarkListParams;

  export import Messages = API.Messages;

  export import ChatRooms = API.ChatRooms;
  export import ChatRoom = API.ChatRoom;
  export import Empty = API.Empty;
  export import ChatRoomCreateParams = API.ChatRoomCreateParams;
  export import ChatRoomListParams = API.ChatRoomListParams;

  export import ChatThreads = API.ChatThreads;
  export import ChatThread = API.ChatThread;
  export import ChatThreadListParams = API.ChatThreadListParams;

  export import Posts = API.Posts;
  export import ImagePost = API.ImagePost;
  export import PostCreateParams = API.PostCreateParams;
  export import PostUpdateParams = API.PostUpdateParams;

  export import CommunityLinks = API.CommunityLinks;

  export import CommunityMembers = API.CommunityMembers;
  export import CurrentCommunityMember = API.CurrentCommunityMember;
  export import MemberDeactivated = API.MemberDeactivated;
  export import CommunityMemberListParams = API.CommunityMemberListParams;

  export import Cookies = API.Cookies;
  export import CookiesDestroyed = API.CookiesDestroyed;
  export import CookiesGenerated = API.CookiesGenerated;

  export import Courses = API.Courses;

  export import Events = API.Events;

  export import FlaggedContents = API.FlaggedContents;
  export import FlaggedContentCreateResponse = API.FlaggedContentCreateResponse;
  export import FlaggedContentCreateParams = API.FlaggedContentCreateParams;

  export import HomePage = API.HomePage;
  export import HomePageRetrieveParams = API.HomePageRetrieveParams;

  export import InvitationLinks = API.InvitationLinks;
  export import InvitationLinkJoinResponse = API.InvitationLinkJoinResponse;

  export import LiveStreams = API.LiveStreams;

  export import NotificationPreferences = API.NotificationPreferences;
  export import MediumNotificationPreferences = API.MediumNotificationPreferences;
  export import MediumNotificationPreferencesUpdate = API.MediumNotificationPreferencesUpdate;
  export import NotificationPreferenceUpdateParams = API.NotificationPreferenceUpdateParams;

  export import Notifications = API.Notifications;
  export import NewNotificationsCount = API.NewNotificationsCount;
  export import Notification = API.Notification;
  export import ResetNewNotificationsCount = API.ResetNewNotificationsCount;
  export import NotificationListParams = API.NotificationListParams;
  export import NotificationMarkAllAsReadParams = API.NotificationMarkAllAsReadParams;

  export import Spaces = API.Spaces;

  export import Profile = API.Profile;
  export import ProfileUpdateParams = API.ProfileUpdateParams;

  export import Reactions = API.Reactions;
  export import CreateReactionResponse = API.CreateReactionResponse;
  export import ReactionCreateParams = API.ReactionCreateParams;

  export import Comments = API.Comments;

  export import Search = API.Search;
  export import SearchResults = API.SearchResults;
  export import SearchListParams = API.SearchListParams;

  export import Signup = API.Signup;

  export import SpaceMembers = API.SpaceMembers;
  export import SpaceMemberMarkAsReadResponse = API.SpaceMemberMarkAsReadResponse;

  export import SpaceNotificationDetails = API.SpaceNotificationDetails;
  export import SpaceNotificationDetailListParams = API.SpaceNotificationDetailListParams;

  export import Comment = API.Comment;
  export import Comments = API.Comments;
  export import Posts = API.Posts;
  export import ProfileUpdateResponse = API.ProfileUpdateResponse;
  export import Space = API.Space;
  export import UserLikes = API.UserLikes;
}

export default HeadlessClientSDK;
