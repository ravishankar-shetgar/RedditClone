declare namespace ApiResponses {
  interface FetchPostsFromSubreddit {
    kind: string;
    data: {
      after: string;
      dist: number;
      modhash?: any;
      geo_filter?: any;
      children: ComponentData.PostData[];
      before?: any;
    };
  }

  interface FetchPostComments {
    kind: string;
    data: {
      after?: any;
      dist?: number;
      modhash?: any;
      geo_filter: string;
      children: ComponentData.CommentData[];
      before?: any;
      is_truncated?: boolean;
    };
  }
}
