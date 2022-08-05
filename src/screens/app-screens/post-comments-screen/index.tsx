import {NavigationProp, RouteProp} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import BackArrowSvg from '../../../assets/svgs/back-arrow-icon';
import Comment from '../../../components/comment';
import {AppStackParamList} from '../../../navigation/root-stack-params';
import styles from './styles';

interface Props {
  route: RouteProp<AppStackParamList, 'PostCommentsScreen'>;
  navigation: NavigationProp<AppStackParamList>;
}

const PostCommentsScreen: React.FC<Props> = props => {
  const {navigation, route} = props;
  const {postTitle, postId, subRedditName} = route.params;

  const [commentData, setCommentData] = useState<
    {
      comment: string;
      author: string;
      upvoteCount: number;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    /** fetch only top-most comments */
    axios
      .get<ApiResponses.FetchPostComments[]>(
        `https://oauth.reddit.com/${subRedditName}/comments/${postId}?depth=1&limit=50`,
        {
          headers: {
            Authorization: `Bearer 2104316996386-wOUFe6u6RzyA3pnsPtzxZsk8iqwaqw`,
            'User-Agent': 'reddit-clone-app',
          },
        },
      )
      .then(res => {
        /** remove first and last elements, as they are not useful */
        const commentsData = res.data.slice(1, res.data.length);

        const comments = commentsData[0].data.children.map(item => {
          return {
            author: item.data.author,
            comment: item.data.body,
            upvoteCount: item.data.ups,
            key: item.data.id,
          };
        });

        setCommentData(comments);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        console.log(e);
      });
  }, []);

  const renderComment = ({
    item,
  }: {
    item: {
      comment: string;
      author: string;
      upvoteCount: number;
    };
  }) => {
    return <Comment data={item} />;
  };

  return (
    <>
      <View style={styles.statusBarPlaceHolder}></View>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backIcon} onPress={goBack}>
            <BackArrowSvg />
          </TouchableOpacity>
          <Text style={styles.title}>{postTitle}</Text>
        </View>

        {isLoading ? (
          <ActivityIndicator size={20} color={'white'} style={styles.loader} />
        ) : (
          <FlatList data={commentData} renderItem={renderComment} />
        )}
      </View>
    </>
  );
};

export default PostCommentsScreen;
