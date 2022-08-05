import {Action} from 'redux';
import {defaultPostsState, IPostsState} from './posts-state/state';
import {defaultUserState, IUserState} from './user-state/state';

export interface IState {
  userState: IUserState;
  postsState: IPostsState;
}

export default function createState(): IState {
  return {
    userState: defaultUserState,
    postsState: defaultPostsState,
  };
}

/** is used in case user wants to sign out of app, will reset state */
export function emptyState(state: IState, action: Action): IState {
  return {
    userState: defaultUserState,
    postsState: defaultPostsState,
  };
}

export type State = IState;
