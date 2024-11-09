// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RepliesAPI from './replies';
import { Replies, ReplyCreateParams, ReplyDeleteResponse, ReplyListParams } from './replies';
import * as UserLikesAPI from './user-likes';
import { UserLikeCreateResponse, UserLikeDeleteResponse, UserLikeListParams, UserLikes } from './user-likes';

export class Comments extends APIResource {
  replies: RepliesAPI.Replies = new RepliesAPI.Replies(this._client);
  userLikes: UserLikesAPI.UserLikes = new UserLikesAPI.UserLikes(this._client);
}

Comments.Replies = Replies;
Comments.UserLikes = UserLikes;

export declare namespace Comments {
  export {
    Replies as Replies,
    type ReplyDeleteResponse as ReplyDeleteResponse,
    type ReplyCreateParams as ReplyCreateParams,
    type ReplyListParams as ReplyListParams,
  };

  export {
    UserLikes as UserLikes,
    type UserLikeCreateResponse as UserLikeCreateResponse,
    type UserLikeDeleteResponse as UserLikeDeleteResponse,
    type UserLikeListParams as UserLikeListParams,
  };
}
