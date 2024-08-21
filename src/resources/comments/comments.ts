// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Replies } from './replies';
import { UserLikes } from './user-likes';
import * as RepliesAPI from './replies';
import * as UserLikesAPI from './user-likes';

export class Comments extends APIResource {
  replies: RepliesAPI.Replies = new RepliesAPI.Replies(this._client);
  userLikes: UserLikesAPI.UserLikes = new UserLikesAPI.UserLikes(this._client);
}

export namespace Comments {
  export import Replies = RepliesAPI.Replies;
  export import ReplyDeleteResponse = RepliesAPI.ReplyDeleteResponse;
  export import ReplyCreateParams = RepliesAPI.ReplyCreateParams;
  export import ReplyListParams = RepliesAPI.ReplyListParams;
  export import UserLikes = UserLikesAPI.UserLikes;
  export import UserLikeCreateResponse = UserLikesAPI.UserLikeCreateResponse;
  export import UserLikeDeleteResponse = UserLikesAPI.UserLikeDeleteResponse;
  export import UserLikeListParams = UserLikesAPI.UserLikeListParams;
}
