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

  interface FetchListOfUserSubreddits {
    kind: string;
    data: {
      after?: any;
      dist: number;
      modhash?: any;
      geo_filter: string;
      children: {
        kind: string;
        data: {
          user_flair_background_color?: any;
          submit_text_html: string;
          restrict_posting: boolean;
          user_is_banned: boolean;
          free_form_reports: boolean;
          wiki_enabled: boolean;
          user_is_muted: boolean;
          user_can_flair_in_sr?: any;
          display_name: string;
          header_img: string;
          title: string;
          allow_galleries: boolean;
          icon_size: number[];
          primary_color: string;
          active_user_count?: any;
          icon_img: string;
          display_name_prefixed: string;
          accounts_active?: any;
          public_traffic: boolean;
          subscribers: number;
          user_flair_richtext: any[];
          name: string;
          quarantine: boolean;
          hide_ads: boolean;
          prediction_leaderboard_entry_type: string;
          emojis_enabled: boolean;
          advertiser_category: string;
          public_description: string;
          comment_score_hide_mins: number;
          allow_predictions: boolean;
          user_has_favorited: boolean;
          user_flair_template_id?: any;
          community_icon: string;
          banner_background_image: string;
          original_content_tag_enabled: boolean;
          community_reviewed: boolean;
          submit_text: string;
          description_html: string;
          spoilers_enabled: boolean;
          comment_contribution_settings: {
            allowed_media_types: string[];
          };
          allow_talks: boolean;
          header_size: number[];
          user_flair_position: string;
          all_original_content: boolean;
          has_menu_widget: boolean;
          is_enrolled_in_new_modmail?: any;
          key_color: string;
          can_assign_user_flair: boolean;
          created: number;
          wls: number;
          show_media_preview: boolean;
          submission_type: string;
          user_is_subscriber: boolean;
          allowed_media_in_comments: string[];
          allow_videogifs: boolean;
          should_archive_posts: boolean;
          user_flair_type: string;
          allow_polls: boolean;
          collapse_deleted_comments: boolean;
          emojis_custom_size?: any;
          public_description_html: string;
          allow_videos: boolean;
          is_crosspostable_subreddit?: boolean;
          notification_level: string;
          should_show_media_in_comments_setting: boolean;
          can_assign_link_flair: boolean;
          accounts_active_is_fuzzed: boolean;
          allow_prediction_contributors: boolean;
          submit_text_label: string;
          link_flair_position: string;
          user_sr_flair_enabled?: any;
          user_flair_enabled_in_sr: boolean;
          allow_chat_post_creation: boolean;
          allow_discovery: boolean;
          accept_followers: boolean;
          user_sr_theme_enabled: boolean;
          link_flair_enabled: boolean;
          disable_contributor_requests: boolean;
          subreddit_type: string;
          suggested_comment_sort: string;
          banner_img: string;
          user_flair_text?: any;
          banner_background_color: string;
          show_media: boolean;
          id: string;
          user_is_moderator: boolean;
          over18: boolean;
          header_title: string;
          description: string;
          is_chat_post_feature_enabled: boolean;
          submit_link_label: string;
          user_flair_text_color?: any;
          restrict_commenting: boolean;
          user_flair_css_class?: any;
          allow_images: boolean;
          lang: string;
          whitelist_status: string;
          url: string;
          created_utc: number;
          banner_size: number[];
          mobile_banner_image: string;
          user_is_contributor: boolean;
          allow_predictions_tournament: boolean;
          videostream_links_count?: number;
        };
      }[];
      before?: any;
    };
  }
}
