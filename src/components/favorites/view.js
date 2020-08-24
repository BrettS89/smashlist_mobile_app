import React from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import styles from './styles';
import Button from '../../shared/components/Button';
import FavoriteCard from './components/favoriteCard';
import LoginModal from '../../shared/components/LoginModal';

const FavoritesView = ({ isLoggedIn, favorites, pressLogin, navigateToArticle }) => {
  const notLoggedIn = (
    <View style={styles.notLoggedIn}>
      <Text style={styles.loginText}>
        Login or sign up to add and view your favorite articles
      </Text>
      <Button
        text="Login or signup"
        onPress={pressLogin}
      />
      <LoginModal screen="Articles" />
    </View>
  );

  const loggedIn = (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <FlatList
          data={favorites}
          keyExtractor={fav => fav._id}
          renderItem={({ item }) => (
            <FavoriteCard
              fav={item}
              navigateToArticle={navigateToArticle}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );

  return isLoggedIn
    ? loggedIn
    : notLoggedIn;
};

export default FavoritesView;
