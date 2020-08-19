import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from '../styles';
import Logo from '../../../shared/components/Logo';

const ArticleCard = (props) => {
  const { article, index, navigateToArticle } = props;

  return (
    <SafeAreaView style={styles.article}>
      <Image source={{ uri: article.photo }} style={styles.photo} resizeMode="cover" />
      <TouchableOpacity onPress={() => navigateToArticle(article._id)}>
        <Text style={styles.title}>
          {article.title}
        </Text>
      </TouchableOpacity>
      <Text style={styles.name}>
        By {article.name}
      </Text>
    </SafeAreaView>
  );
};

export default ArticleCard;
