declare module ApiResponses {
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
}
