import {IPostsState} from './state';
import {PostsActionCreatorType, PostsActionsType} from './types';

/** subreddit that will be used to show posts */
export const setCurrentSubreddit = (
  data: IPostsState['currentSelectedSubreddit'],
): PostsActionCreatorType => ({
  type: PostsActionsType.SELECT_RANDOM_SUBREDDIT,
  data,
});

/** fetch posts */
export const fetchPostsRequest = (): PostsActionCreatorType => ({
  type: PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_REQUEST,
});

/** store posts */
export const fetchPostsSuccess = (
  data: IPostsState['posts'],
): PostsActionCreatorType => ({
  type: PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_SUCCESS,
  data,
});
