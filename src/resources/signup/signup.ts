// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProfileAPI from './profile';

export class Signup extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
}

export namespace Signup {
  export import Profile = ProfileAPI.Profile;
  export import ProfileUpdateParams = ProfileAPI.ProfileUpdateParams;
}
