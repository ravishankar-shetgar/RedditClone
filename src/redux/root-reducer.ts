import {Action, combineReducers} from 'redux';
import UserStateReducer from './user-state/reducer';
import {emptyState, IState} from './state';
import PostsStateReducer from './posts-state/reducer';

const AppReducer = combineReducers({
  userState: UserStateReducer,
  postsState: PostsStateReducer,
});

const RootReducer = (state: IState, action: Action) => {
  return AppReducer(state, action);
};

export default RootReducer;
