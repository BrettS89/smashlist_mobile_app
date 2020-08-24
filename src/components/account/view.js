import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import LoginModal from '../../shared/components/LoginModal';
import Logo from '../../shared/components/Logo';
import ContactModal from './components/contactModal';

const AccountView = ({ isLoggedIn, pressLogin, contactModalOpen, setContactModalOpen, logout }) => {
  const notLoggedIn = (
    <View style={styles.notLoggedIn}>
      <Text style={styles.loginText}>
        Login or create an account
      </Text>
      <Button
        text="Login or signup"
        onPress={pressLogin}
      />
      <LoginModal screen="Articles" />
    </View>
  );

  const loggedIn = (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Logo />
      <View style={styles.container}>
        <TouchableOpacity style={styles.row} onPress={() => setContactModalOpen(true)}>
          <Text style={styles.buttonText}>
            Contact us
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={logout}>
          <Text style={styles.buttonText}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
      <ContactModal
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
      />
    </SafeAreaView>
  );

  return isLoggedIn
    ? loggedIn
    : notLoggedIn;
};

export default AccountView;
