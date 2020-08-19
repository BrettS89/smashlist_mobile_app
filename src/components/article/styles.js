import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  side: {
    width: 20,
  },
  photo: {
    width: '100%',
    height: 285,
    marginBottom: 20,
    marginTop: 0,
    borderRadius: 0,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    flexWrap: 'wrap',
    marginBottom: 8,
    marginTop: 15,
    paddingHorizontal: 0,
    textAlign: 'center',
  },
  name: {
    // textAlign: 'center',
    // marginBottom: 5,
    // marginRight: 5,
  },
  nameFavorite: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 13,
    alignItems: 'center'
  },
  favoriteContainer: {
    flexDirection: 'row',
    marginLeft: 5,
    // alignItems: 'center',
  },
  favoriteText: {
    color: colors.main,
    fontWeight: '600',
    marginLeft: 3,
  },
  section: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  contentTitle: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 25,
    color: colors.main
  },
  contentContent: {
    fontSize: 17,
    lineHeight: 23,
  }
});
