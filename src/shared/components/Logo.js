import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Logo = props => {
  return (
    <View style={styles.appLogo}>
      <Icon name="list-alt" size={25} color={colors.main} />
      <Text style={styles.first}>Smash</Text>
      <Text style={styles.second}>List</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  appLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  first: {
    fontSize: 22,
    fontWeight: '800',
    marginLeft: 7,
  },
  second: {
    color: colors.main,
    fontSize: 22,
    fontWeight: '800',
  }
});
