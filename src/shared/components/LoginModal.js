import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { login, register } from '../../lib/api';
import { SET_USER_DATA, SHOW_LOGIN_MODAL, GET_FAVORITES } from '../../redux/actions';
import alert from '../../utils/alert';
import colors from '../styles/colors';

import Button from './Button';
import Input from './Input';
import Logo from './Logo';
import Spinner from './Spinner';

const LoginModal = props => {
  const dispatch = useDispatch();
  const showLoginModal = useSelector(state => state.user.showLoginModal);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function closeModal() {
    dispatch({ type: SHOW_LOGIN_MODAL, payload: false });
  }

  function navigate() {
    closeModal();
    if (props.screen === false) return;
    props.navigation.navigate(props.screen);
  }

  async function loginOrRegister() {
    try {
      setLoading(true);
      const { user, token } = await login({ email, password });
      await AsyncStorage.setItem('token', token);
      setLoading(false);
      dispatch({ type: SET_USER_DATA, payload: user });
      dispatch({ type: GET_FAVORITES, payload: user });
      if (props.callback) props.callback(true);
      navigate();
    } catch(e) {
      console.log(e);
      try {
        const { user, token } = await register({ email, password });
        await AsyncStorage.setItem('token', token);
        setLoading(false);
        dispatch({ type: SET_USER_DATA, payload: user });
        if (props.callback) props.callback(true);
        navigate();
      } catch(e) {
        console.log(e);
        setLoading(false);
        alert('Error', 'Something went wrong :( sorry, m8');
      }
    }
  }

  function renderButtons() {
    if (loading) {
      return (
        <React.Fragment>
          <Spinner color={colors.main} />
          <View style={{ marginTop: 15 }}>
            <Text style={styles.noThanksText}>
              No thanks
            </Text>
          </View>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Button
          text="Login or Signup"
          buttonStyle={{ marginBottom: 15 }}
          onPress={loginOrRegister} />

        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.noThanksText}>
            No thanks
          </Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  }

  return (
    <Modal
      visible={showLoginModal}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <Logo />

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Input
                name="email"
                labelText="email"
                email={true}
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                onSubmitHandler={loginOrRegister}
              />
            </View>
            <View>
              <Input 
                name="password"
                labelText="password"
                placeholder="Password"
                secureTextEntry
                onChangeText={password => setPassword(password)}
                onSubmitHandler={loginOrRegister}
              />
            </View> 
          </View>

          {renderButtons()}

          {/* <Button
            text="Login or Signup"
            buttonStyle={{ marginBottom: 15 }}
            onPress={loginOrRegister} />

          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.noThanksText}>
              No thanks
            </Text>
          </TouchableOpacity> */}

        </View>
      </View>
    </Modal>
  );
};

export default withNavigation(LoginModal);

const styles = StyleSheet.create({
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
    paddingVertical: 45,
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
