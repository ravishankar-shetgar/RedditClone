import {all, fork} from '@redux-saga/core/effects';
import postsStateSaga from './posts-state/sagas';
import userStateSaga from './user-state/sagas';

export function* rootSaga() {
  yield all([fork(userStateSaga), fork(postsStateSaga)]);
}
