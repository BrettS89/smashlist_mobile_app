import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles';

const FavoriteCard = ({ fav: { article: { name, photo, title, _id } }, navigateToArticle }) => {
  return (
    <View style={styles.favoriteCard}>
      <Image
        source={{ uri: photo }} 
        resizeMode="cover"
        style={styles.photo}
      />
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigateToArticle(_id)}>
        <Text style={styles.title}>
          {title}
        </Text>
        </TouchableOpacity>
        <Text style={styles.name}>
          By {name}
        </Text>
      </View>
    </View>
  );
};

export default FavoriteCard;
