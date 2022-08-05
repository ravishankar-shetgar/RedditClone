import {IUserState} from './state';
import {UserActionCreatorType, UserActionsType} from './types';

/** login user, store access token */
export const setUserLoggedIn = (
  data: IUserState['accessToken'],
): UserActionCreatorType => ({
  type: UserActionsType.USER_LOGGED_IN,
  data,
});

/** fetch user subreddits */
export const fetchUserSubredditsRequest = (): UserActionCreatorType => ({
  type: UserActionsType.FETCH_USER_SUBREDDITS_REQUEST,
});

/** store user subreddits */
export const fetchUserSubredditsSuccess = (
  data: IUserState['userSubreddits'],
): UserActionCreatorType => ({
  type: UserActionsType.FETCH_USER_SUBREDDITS_SUCCESS,
  data,
});
