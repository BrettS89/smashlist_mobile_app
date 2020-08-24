import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_LOGIN_MODAL, SET_FAVORITES, SET_USER_DATA } from '../../redux/actions';
import View from './view';

const Account = props => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.userData._id);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  function pressLogin() {
    dispatch({ type: SHOW_LOGIN_MODAL, payload: true });
  }

  async function logout() {
    await AsyncStorage.clear();
    dispatch({ type: SET_FAVORITES, payload: [] });
    dispatch({ type: SET_USER_DATA, payload: {} });
    props.navigation.navigate('Articles');
  }

  return (
    <View
      isLoggedIn={isLoggedIn}
      pressLogin={pressLogin}
      contactModalOpen={contactModalOpen}
      setContactModalOpen={setContactModalOpen}
      logout={logout}
    />
  );
};

export default Account;
