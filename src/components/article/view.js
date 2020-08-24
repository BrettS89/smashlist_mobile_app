import React from 'react';
import { ScrollView, View, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from './components/header';
import ArticleSection from './components/section';
import LoginModal from '../../shared/components/LoginModal';

const ArticleView = ({ article, addToFavorites }) => {
  function renderArticle() {
    return article.content.map(c => {
      return (
        <ArticleSection
          key={c._id}
          title={c.title}
          content={c.content}
        />
      );
    });
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          title={article.title}
          name={article.name}
          addToFavorites={addToFavorites}
          favorited={article.favorited}
        />
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: article.photo }} style={styles.photo} resizeMode="cover" />
        {renderArticle()}
      </ScrollView>
      <LoginModal screen={false} callback={addToFavorites} />
    </View>
  );
};

export default ArticleView;
