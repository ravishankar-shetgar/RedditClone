export type AppStackParamList = {
  HomeFeedScreen: undefined;
  PostCommentsScreen: {
    postTitle: string;
    postId: string;
    subRedditName: string;
  };
};

export type AuthStackParamsList = {
  LoginScreen: undefined;
};
