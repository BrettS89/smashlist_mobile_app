import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { useDispatch } from 'react-redux';
import { APP_LOAD } from '../../redux/actions';

const Auth = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: APP_LOAD, payload: navigate });
  });

  function navigate () {
    props.navigation.navigate('Articles');
  }

  return (
    <AppLoading />
  );
}

export default Auth;
