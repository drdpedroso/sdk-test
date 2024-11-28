// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ProfileAPI from './profile';
import { Profile, ProfileUpdateParams } from './profile';

export class Signup extends APIResource {
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
}

Signup.Profile = Profile;

export declare namespace Signup {
  export { Profile as Profile, type ProfileUpdateParams as ProfileUpdateParams };
}
