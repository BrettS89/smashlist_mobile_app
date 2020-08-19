import { Platform, StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  article: {
    width: Platform.isPad ? 600 : '100%',
    marginBottom: 38,
  },
  photo: {
    width: '100%',
    height: 280,
    marginBottom: 10,
    borderRadius: 0,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    marginBottom: 7,
  },
  name: {
    paddingHorizontal: 15,
    color: 'grey'
  }
});
