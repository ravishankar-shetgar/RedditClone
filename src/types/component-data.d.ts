declare module ComponentData {
  interface PostData {
    kind: string;
    data: {
      approved_at_utc?: any;
      subreddit: string;
      selftext: string;
      author_fullname: string;
      saved: boolean;
      mod_reason_title?: any;
      gilded: number;
      clicked: boolean;
      title: string;
      link_flair_richtext: any[];
      subreddit_name_prefixed: string;
      hidden: boolean;
      pwls: number;
      link_flair_css_class?: any;
      downs: number;
      top_awarded_type?: any;
      hide_score: boolean;
      name: string;
      quarantine: boolean;
      link_flair_text_color: string;
      upvote_ratio: number;
      author_flair_background_color?: any;
      subreddit_type: string;
      ups: number;
      total_awards_received: number;
      media_embed: {
        content: string;
        width?: number;
        scrolling?: boolean;
        height?: number;
      };
      author_flair_template_id?: any;
      is_original_content: boolean;
      user_reports: any[];
      secure_media: {
        type: string;
        oembed: {
          provider_url: string;
          version: string;
          title: string;
          type: string;
          thumbnail_width: number;
          height: number;
          width: number;
          html: string;
          author_name: string;
          provider_name: string;
          thumbnail_url: string;
          thumbnail_height: number;
          author_url: string;
        };
      };
      is_reddit_media_domain: boolean;
      is_meta: boolean;
      category?: any;
      secure_media_embed: {
        content: string;
        width?: number;
        scrolling?: boolean;
        media_domain_url: string;
        height?: number;
      };
      link_flair_text?: any;
      can_mod_post: boolean;
      score: number;
      approved_by?: any;
      is_created_from_ads_ui: boolean;
      author_premium: boolean;
      thumbnail: string;
      edited: boolean;
      author_flair_css_class?: any;
      author_flair_richtext: any[];
      gildings: {};
      content_categories?: any;
      is_self: boolean;
      mod_note?: any;
      created: number;
      link_flair_type: string;
      wls: number;
      removed_by_category?: any;
      banned_by?: any;
      author_flair_type: string;
      domain: string;
      allow_live_comments: boolean;
      selftext_html?: any;
      likes?: any;
      suggested_sort?: any;
      banned_at_utc?: any;
      url_overridden_by_dest: string;
      view_count?: any;
      archived: boolean;
      no_follow: boolean;
      is_crosspostable: boolean;
      pinned: boolean;
      over_18: boolean;
      all_awardings: {
        giver_coin_reward?: any;
        subreddit_id?: any;
        is_new: boolean;
        days_of_drip_extension?: any;
        coin_price: number;
        id: string;
        penny_donate?: any;
        award_sub_type: string;
        coin_reward: number;
        icon_url: string;
        days_of_premium?: any;
        tiers_by_required_awardings?: any;
        resized_icons: {
          url: string;
          width: number;
          height: number;
        }[];
        icon_width: number;
        static_icon_width: number;
        start_date?: any;
        is_enabled: boolean;
        awardings_required_to_grant_benefits?: any;
        description: string;
        end_date?: any;
        sticky_duration_seconds?: any;
        subreddit_coin_reward: number;
        count: number;
        static_icon_height: number;
        name: string;
        resized_static_icons: {
          url: string;
          width: number;
          height: number;
        }[];
        icon_format: string;
        icon_height: number;
        penny_price?: number;
        award_type: string;
        static_icon_url: string;
      }[];
      awarders: any[];
      media_only: boolean;
      can_gild: boolean;
      spoiler: boolean;
      locked: boolean;
      author_flair_text?: any;
      treatment_tags: any[];
      visited: boolean;
      removed_by?: any;
      num_reports?: any;
      distinguished?: any;
      subreddit_id: string;
      author_is_blocked: boolean;
      mod_reason_by?: any;
      removal_reason?: any;
      link_flair_background_color: string;
      id: string;
      is_robot_indexable: boolean;
      report_reasons?: any;
      author: string;
      discussion_type?: any;
      num_comments: number;
      send_replies: boolean;
      whitelist_status: string;
      contest_mode: boolean;
      mod_reports: any[];
      author_patreon_flair: boolean;
      author_flair_text_color?: any;
      permalink: string;
      parent_whitelist_status: string;
      stickied: boolean;
      url: string;
      subreddit_subscribers: number;
      created_utc: number;
      num_crossposts: number;
      media: {
        type: string;
        oembed: {
          provider_url: string;
          version: string;
          title: string;
          type: string;
          thumbnail_width: number;
          height: number;
          width: number;
          html: string;
          author_name: string;
          provider_name: string;
          thumbnail_url: string;
          thumbnail_height: number;
          author_url: string;
        };
      };
      is_video: boolean;
    };
  }
}