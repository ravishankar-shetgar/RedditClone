export interface IPostsState {
  currentSelectedSubreddit: string;
  posts: ComponentData.PostData[];
  isFetching: boolean;
}

export const defaultPostsState: IPostsState = {
  currentSelectedSubreddit: '',
  posts: [],
  isFetching: false,
};
