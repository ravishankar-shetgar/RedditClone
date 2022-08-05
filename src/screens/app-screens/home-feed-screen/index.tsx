import {NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Post from '../../../components/post';
import {AppStackParamList} from '../../../navigation/root-stack-params';
import {fetchPostsRequest} from '../../../redux/posts-state/action';
import {IState} from '../../../redux/state';
import {fetchUserSubredditsRequest} from '../../../redux/user-state/action';
import styles from './styles';

interface Props {
  navigation: NavigationProp<AppStackParamList>;
}

const HomeFeedScreen: React.FC<Props> = props => {
  const {navigation} = props;
  const posts = useSelector((state: IState) => state.postsState.posts);
  const selectedSubreddit = useSelector(
    (state: IState) => state.postsState.currentSelectedSubreddit,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserSubredditsRequest());
    dispatch(fetchPostsRequest());
  }, []);

  const renderPost = ({item}: {item: ComponentData.PostData}) => {
    return <Post data={item} navigation={navigation} />;
  };

  return (
    <>
      <View style={styles.statusBarPlaceHolder}></View>

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.subredditLogo}></View>
          <Text style={styles.title}>{selectedSubreddit}</Text>
        </View>

        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={item => item.data.id}
        />
      </View>
    </>
  );
};

export default HomeFeedScreen;
