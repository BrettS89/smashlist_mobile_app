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
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    borderRadius: 10,
  },
  modalTitle: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  form: {
    marginTop: 30,
    marginBottom: 25,
    width: '80%',
  },
  inputContainer: {
    marginBottom: 5,
  },
  noThanksText: {
    fontWeight: '700',
    color: colors.main,
    fontSize: 15,
  },
});
