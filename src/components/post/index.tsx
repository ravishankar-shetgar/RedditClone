import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import CommentIcon from '../../assets/svgs/comment-icon';
import UpvoteIcon from '../../assets/svgs/upvote-icon';
import {AppStackParamList} from '../../navigation/root-stack-params';
import {isImageUrl} from '../../utils/helper-methods';
import styles from './styles';

interface Props {
  data: ComponentData.PostData;
  navigation: NavigationProp<AppStackParamList>;
}

const Post = (props: Props): JSX.Element => {
  const {
    author,
    title,
    thumbnail,
    subreddit_name_prefixed: subredditName,
    ups: upvoteCount,
    num_comments: commentCount,
    id,
  } = props.data.data;

  const showComments = () => {
    props.navigation.navigate('PostCommentsScreen', {
      postTitle: title,
      postId: id,
      subRedditName: subredditName,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={showComments}>
      <View style={styles.header}>
        <Text style={styles.subredditName}>{subredditName}</Text>
        <Text style={styles.subredditName}> • </Text>
        <Text style={styles.userName}>{author}</Text>
      </View>

      <Text style={styles.postTitle}>{title}</Text>

      {isImageUrl(thumbnail) ? (
        <View style={styles.postMediaView}>
          <FastImage
            source={{uri: thumbnail}}
            resizeMode={'contain'}
            style={styles.postThumbnail}></FastImage>
        </View>
      ) : null}

      <View style={styles.footer}>
        <View style={styles.upvoteCounterView}>
          <UpvoteIcon />
          <Text style={styles.counterText}>{upvoteCount}</Text>
        </View>

        <View style={styles.commentCounterView}>
          <CommentIcon />
          <Text style={styles.counterText}>{commentCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Post);
