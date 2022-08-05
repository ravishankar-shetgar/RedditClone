import {IState} from '../state';
import {IPostsState} from './state';

const getPostsState = (state: IState): IPostsState => {
  return state.postsState;
};

/** selected subreddit */
export function getSelectedSubreddit(
  state: IState,
): IPostsState['currentSelectedSubreddit'] {
  return getPostsState(state).currentSelectedSubreddit;
}

/** posts data */
export function getPosts(state: IState): IPostsState['posts'] {
  return getPostsState(state).posts;
}

/** background fetch in progress */
export function getIsFetchingPosts(state: IState): IPostsState['isFetching'] {
  return getPostsState(state).isFetching;
}
