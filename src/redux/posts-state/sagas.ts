import axios from 'axios';
import {all, put, takeLatest, call, select} from '@redux-saga/core/effects';
import {PostsActionsType} from './types';
import {fetchPostsSuccess, setCurrentSubreddit} from './action';
import {getAccessToken, getUserSubredditsList} from '../user-state/selector';

const getPosts = (subreddit: string, accessToken: string) => {
  return axios.get<ApiResponses.FetchPostsFromSubreddit>(
    `https://oauth.reddit.com/${subreddit}/hot`,
    {
      params: {
        limit: 60,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};

function* fetchPostsSaga() {
  try {
    const subreddits = yield select(getUserSubredditsList);
    const accessToken = yield select(getAccessToken);

    const randomSubreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    yield put(setCurrentSubreddit(randomSubreddit));

    const response = yield call(getPosts, randomSubreddit, accessToken);

    const posts = response.data.data.children;
    yield put(fetchPostsSuccess(posts));
  } catch (e) {
    console.log(e);
  }
}

function* postsStateSaga() {
  yield all([
    takeLatest(
      PostsActionsType.FETCH_USER_SUBREDDITS_POSTS_REQUEST,
      fetchPostsSaga,
    ),
  ]);
}

export default postsStateSaga;
