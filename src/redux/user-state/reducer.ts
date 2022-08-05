import {IUserState, defaultUserState} from './state';
import {UserActionCreatorType, UserActionsType} from './types';

const UserStateReducer = (
  state: IUserState | undefined = defaultUserState,
  action: UserActionCreatorType,
): IUserState => {
  switch (action.type) {
    case UserActionsType.USER_LOGGED_IN: {
      return {
        ...state,
        accessToken: action.data,
        isLoggedIn: true,
      };
    }

    case UserActionsType.FETCH_USER_SUBREDDITS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UserActionsType.FETCH_USER_SUBREDDITS_SUCCESS: {
      return {
        ...state,
        userSubreddits: action.data,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export default UserStateReducer;
