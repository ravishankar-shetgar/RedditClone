import {IState} from '../state';
import {IUserState} from './state';

const getUserState = (state: IState): IUserState => {
  return state.userState;
};

/** user has logged in with an account */
export function getIsUserLoggedIn(state: IState): IUserState['isLoggedIn'] {
  return getUserState(state).isLoggedIn;
}

/** oauth2 access token */
export function getAccessToken(state: IState): IUserState['accessToken'] {
  return getUserState(state).accessToken;
}

/** background fetch in progress */
export function getIsDataLoading(state: IState): IUserState['isLoading'] {
  return getUserState(state).isLoading;
}

/** list of subreddits user has subscribed to */
export function getUserSubredditsList(
  state: IState,
): IUserState['userSubreddits'] {
  return getUserState(state).userSubreddits;
}
