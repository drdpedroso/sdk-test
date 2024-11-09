// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Rooms extends APIResource {
  /**
   * Create a live stream room
   */
  create(body?: RoomCreateParams, options?: Core.RequestOptions): Core.APIPromise<LiveRoom>;
  create(options?: Core.RequestOptions): Core.APIPromise<LiveRoom>;
  create(
    body: RoomCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveRoom> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/api/headless/v1/live_streams/rooms', { body, ...options });
  }
}

export interface LiveRoom {
  id?: number;

  access_type?: string;

  can_host?: boolean;

  can_manage?: boolean;

  can_moderate?: boolean;

  chat_room_uuid?: string;

  created_at?: string;

  creator?: LiveRoom.Creator;

  description?: string;

  host_capacity?: number;

  invited_entities_ids?: Array<number> | null;

  is_creator?: boolean;

  limit_url_sharing?: boolean;

  mute_on_join?: boolean;

  name?: string;

  participants_preview?: LiveRoom.ParticipantsPreview;

  recording_enabled?: boolean;

  room_provider?: string;

  room_type?: string;

  slug?: string;

  status?: string;

  view_type?: string;
}

export namespace LiveRoom {
  export interface Creator {
    id?: number;

    avatar_url?: string | null;

    bio?: string;

    headline?: string;

    name?: string;

    public_uid?: string;
  }

  export interface ParticipantsPreview {
    count?: number;

    records?: Array<ParticipantsPreview.Record>;
  }

  export namespace ParticipantsPreview {
    export interface Record {
      id?: number;

      token?: string;

      avatar_url?: string | null;

      bio?: string;

      community_member_id?: number;

      email?: string;

      headline?: string;

      name?: string;

      public_uid?: string;

      role?: string;

      status?: string;
    }
  }
}

export interface RoomCreateParams {
  access_type?: 'open' | 'secret' | 'public_stream';

  description?: string;

  invited_entities_ids?: RoomCreateParams.InvitedEntitiesIDs;

  limit_url_sharing?: boolean;

  mute_on_join?: boolean;

  name?: string;

  recording_enabled?: boolean;

  room_type?: 'stream' | 'conference';

  slug?: string;

  view_type?: 'speaker_view' | 'grid_view';
}

export namespace RoomCreateParams {
  export interface InvitedEntitiesIDs {
    member_tags_ids?: Array<number>;

    members_ids?: Array<number>;

    space_groups_ids?: Array<number>;

    spaces_ids?: Array<number>;
  }
}

export declare namespace Rooms {
  export { type LiveRoom as LiveRoom, type RoomCreateParams as RoomCreateParams };
}
