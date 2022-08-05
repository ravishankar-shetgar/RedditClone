import {IUserState} from './state';

/** all action types */
export enum UserActionsType {
  USER_LOGGED_IN = 'USER_LOGGED_IN',
  FETCH_USER_SUBREDDITS_REQUEST = 'FETCH_USER_SUBREDDITS_REQUEST',
  FETCH_USER_SUBREDDITS_SUCCESS = 'FETCH_USER_SUBREDDITS_SUCCESS',
}

/** user has logged in, store access token */
interface setUserLoggedIn {
  type: typeof UserActionsType.USER_LOGGED_IN;
  data: IUserState['accessToken'];
}

/** fetch list of subscribed subreddits  */
interface fetchUserSubredditsRequest {
  type: typeof UserActionsType.FETCH_USER_SUBREDDITS_REQUEST;
}

/** store list of subscribed subreddits  */
interface fetchUserSubredditsSuccess {
  type: typeof UserActionsType.FETCH_USER_SUBREDDITS_SUCCESS;
  data: IUserState['userSubreddits'];
}

/**
 * Add a type for every action belonging to this state. */
export type UserActionCreatorType =
  | setUserLoggedIn
  | fetchUserSubredditsRequest
  | fetchUserSubredditsSuccess;
