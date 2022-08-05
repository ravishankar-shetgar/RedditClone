import axios from 'axios';
import {all, put, takeLatest, call, select} from '@redux-saga/core/effects';
import {fetchUserSubredditsSuccess} from './action';
import {UserActionsType} from './types';
import {getAccessToken} from './selector';

const getSubreddits = (accessToken: string) =>
  axios.get<ApiResponses.FetchListOfUserSubreddits[]>(
    `https://oauth.reddit.com/subreddits/mine/subscriber`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

function* fetchSubredditsSaga() {
  try {
    const accessToken = yield select(getAccessToken);

    const response = yield call(getSubreddits, accessToken);

    const subreddits = response.data.data.children.map(item => {
      return item.data.display_name_prefixed;
    });

    yield put(fetchUserSubredditsSuccess(subreddits));
  } catch (e) {
    console.log(e);
  }
}

function* userStateSaga() {
  yield all([
    takeLatest(
      UserActionsType.FETCH_USER_SUBREDDITS_REQUEST,
      fetchSubredditsSaga,
    ),
  ]);
}

export default userStateSaga;
