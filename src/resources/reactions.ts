// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Reactions extends APIResource {
  /**
   * Create a reaction on a chat room message
   */
  create(body: ReactionCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateReactionResponse> {
    return this._client.post('/api/headless/v1/reactions', { body, ...options });
  }
}

export interface CreateReactionResponse {
  message?: string;

  reaction?: CreateReactionResponse.Reaction;

  success?: boolean;
}

export namespace CreateReactionResponse {
  export interface Reaction {
    community_member_id: number;

    emoji: string;

    reactionable_id: number;

    reactionable_type: string;
  }
}

export interface ReactionCreateParams {
  chat_room_message: number;

  emoji: string;
}

export declare namespace Reactions {
  export {
    type CreateReactionResponse as CreateReactionResponse,
    type ReactionCreateParams as ReactionCreateParams,
  };
}
