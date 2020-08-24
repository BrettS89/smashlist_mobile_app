import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    marginTop: 40,
    
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
  row: {
    marginBottom: 15,
  },
  buttonText: {
    color: colors.main,
    fontWeight: '700',
    fontSize: 17
  }
});
