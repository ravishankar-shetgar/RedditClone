import {IPostsState, defaultPostsState} from './state';
import {PostsActionCreatorType, PostsActionsType} from './types';

const PostsStateReducer = (
  state: IPostsState | undefined = defaultPostsState,
  action: PostsActionCreatorType,
): IPostsState => {
  switch (action.type) {
    case PostsActionsType.SELECT_RANDOM_SUBREDDIT: {
      return {
        ...state,
        currentSelectedSubreddit: action.data,
      };
    }

    case PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.data,
        isFetching: false,
      };
    }

    default:
      return state;
  }
};

export default PostsStateReducer;
