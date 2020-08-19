import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import styles from './styles';
import Logo from '../../shared/components/Logo';
import ArticleCard from './components/articleCard';

const ArticlesView = ({ articles, navigateToArticle }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginBottom: 10 }}>
      <Logo />
      </SafeAreaView>
      <FlatList
        data={articles}
        keyExtractor={article => article._id}
        showsVerticalScrollIndicator={false}
        renderItem={article => (
          <ArticleCard
            article={article.item}
            index={article.index}
            navigateToArticle={navigateToArticle}
          />
        )}
      />
    </View>
  );
};

export default ArticlesView;
