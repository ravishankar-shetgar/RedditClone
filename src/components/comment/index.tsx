import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface Props {
  data: {
    comment: string;
    author: string;
    upvoteCount: number;
  };
}

const Comment = (props: Props): JSX.Element => {
  const {author = '', comment = '', upvoteCount = ''} = props.data;

  return (
    <View style={styles.comment}>
      <Text style={styles.commentAuthor}>
        {`${author} • ${upvoteCount} Upvotes`}
      </Text>
      <Text style={styles.commentText}>{comment}</Text>
    </View>
  );
};

export default React.memo(Comment);
