import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  commentText: {
    color: 'white',
    fontSize: 16,
  },
  comment: {
    borderWidth: 1,
    borderColor: 'rgba(256,256,256,0.5)',
    marginVertical: 5,
    padding: 10,
    borderRadius: 4,
  },
  commentAuthor: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 7,
    alignSelf: 'center',
  },
});

export default styles;
