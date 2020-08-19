import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  notLoggedIn: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loginText: {
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  favoriteCard: {
    flexDirection: 'row',
    flex: 1,
    // flexShrink: 1,

    marginBottom: 15,
  },
  photo: {
    width: 150,
    height: 100,
    borderRadius: 1,
    marginRight: 8,
  },
  title: {
    flexShrink: 1,
    fontWeight: '700',
    fontSize: 15,
    flexWrap: 'wrap',
    marginBottom: 5
  },
  name: {
    fontSize: 13,
    color: 'gray'
  }
});
