import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const ArticleSection = ({ content, title }) => {
  function renderTitle() {
    if (title) {
      return (
      <Text style={styles.contentTitle}>
        {title}
      </Text>
      );
    }
  }

  return (
    <View style={styles.section}>
      {renderTitle()}
      <Text style={styles.contentContent}>
        {content}
      </Text>
    </View>
  );
};

export default ArticleSection;
