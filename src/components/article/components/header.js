import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import HeaderBack from '../../../shared/components/HeaderBack';
import Star from 'react-native-vector-icons/FontAwesome';
import colors from '../../../shared/styles/colors';

const ArticleHeader = ({ name, title, favorited, addToFavorites }) => {
  function renderFavorited() {
    if (favorited) {
      return (
        <View style={styles.favoriteContainer} onPress={addToFavorites}>
          <Star name="star" color={colors.main} size={16} />
          <Text style={styles.favoriteText}>
            Article favorited
          </Text>
        </View>
      )
    }
    return (
      <TouchableOpacity style={styles.favoriteContainer} onPress={addToFavorites}>
        <Star name="star-o" color={colors.main} size={16} />
        <Text style={styles.favoriteText}>
          Add to favorites
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.header}>
      <HeaderBack moreStyles={{ paddingHorizontal: 0, width: 20 }} screen="Articles" />
      <View style={{ width: '81%' }}>
        <Text style={[styles.title, { marginHorizontal: 10, marginTop: 0 }]}>
          {title}
        </Text>
        <View style={styles.nameFavorite}>
          <Text style={styles.name}>
            By {name} | 
          </Text>
          {renderFavorited()}
        </View>
      </View>
      <View style={styles.side}>
        <Text style={{ flexWrap:'wrap' }}></Text>
      </View>
    </View>
  );
};

export default ArticleHeader;
