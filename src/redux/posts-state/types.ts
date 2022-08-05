import {IPostsState} from './state';

/** all action types */
export enum PostsActionsType {
  SELECT_RANDOM_SUBREDDIT = 'SELECT_RANDOM_SUBREDDIT',
  FETCH_USER_SUBREDDITS_POSTS_REQUEST = 'FETCH_USER_SUBREDDITS_POSTS_REQUEST',
  FETCH_USER_SUBREDDITS_POSTS_SUCCESS = 'FETCH_USER_SUBREDDITS_POSTS_SUCCESS',
}

/** select a random subreddit to show posts */
interface setRandomSubreddit {
  type: typeof PostsActionsType.SELECT_RANDOM_SUBREDDIT;
  data: IPostsState['currentSelectedSubreddit'];
}

/** fetch posts from selected subreddit */
interface fetchSubredditPostsRequest {
  type: typeof PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_REQUEST;
}

/** store posts from selected subreddit */
interface fetchSubredditPostsSuccess {
  type: typeof PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_SUCCESS;
  data: IPostsState['posts'];
}

/**
 * Add a type for every action belonging to this state. */
export type PostsActionCreatorType =
  | setRandomSubreddit
  | fetchSubredditPostsRequest
  | fetchSubredditPostsSuccess;
