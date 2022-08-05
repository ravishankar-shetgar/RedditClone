export interface IUserState {
  isLoggedIn: boolean;
  /** oauth2 access token for api calls */
  accessToken: string;
  /** subreddits the user has subscribed to */
  userSubreddits: string[];
  /** fetch in progress */
  isLoading: boolean;
}

export const defaultUserState: IUserState = {
  isLoggedIn: false,
  accessToken: '',
  userSubreddits: [],
  isLoading: false,
};
