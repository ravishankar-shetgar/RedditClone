import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    width: '100%',
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 10,
  },
  subredditName: {
    color: 'rgba(256,256,256,0.7)',
    fontSize: 16,
    fontWeight: '500',
  },
  userName: {
    color: 'rgba(256,256,256,0.5)',
    fontSize: 16,
    fontWeight: '300',
  },
  postTitle: {
    color: 'white',
    paddingHorizontal: 15,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '500',
  },
  postMediaView: {
    borderWidth: 1,
    borderColor: 'rgba(256,256,256,0.5)',
    height: 230,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 3,
  },
  upvoteCounterView: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  commentCounterView: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    paddingVertical: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: 'rgba(256,256,256,0.7)',
    fontSize: 17,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  postThumbnail: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
