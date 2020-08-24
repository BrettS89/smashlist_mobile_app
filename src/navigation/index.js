import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../shared/styles/colors';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

import HeaderBack from '../shared/components/HeaderBack';
import Logo from '../shared/components/Logo';

import Auth from '../components/auth';
import Articles from '../components/articles';
import Article from '../components/article';
import Favorites from '../components/favorites';
import Account from '../components/account';

const mainNav = createBottomTabNavigator({
  Articles: {
    screen: createStackNavigator({
      Articles: {
        screen: Articles,
        navigationOptions: {
          headerShown: false,
        },
      },
      Article: {
        screen: Article,
        navigationOptions: {
          headerShown: false,
          headerLeft: () => <HeaderBack screen={'Articles'} />,
          headerRight: () => null,
          headerTitle: () => <Logo />,
          
          headerStyle: {
            shadowOffset: { height: 0, width: 0 }
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Articles',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="open-book" size={24} color={tintColor}/>
      )
    }
  },
  Favorites: {
    screen: createStackNavigator({
      Favorites: {
        screen: Favorites,
        navigationOptions: {
          headerShown: false,
        },
      },
      Article2: {
        screen: Article,
        navigationOptions: {
          headerShown: false,
          headerLeft: () => <HeaderBack screen={'Favorites'} />,
          headerRight: () => null,
          headerTitle: () => <Logo />,
          headerStyle: {
            shadowOffset: { height: 0, width: 0 }
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Favorites',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="folder-star" size={28} color={tintColor}/>
      )
    }
  },

  // Favorites: {
  //   screen: Favorites,
  //   navigationOptions: {
  //     title: 'Favorites',
  //     activeTintColor: colors.main,
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon2 name="folder-star" size={28} color={tintColor}/>
  //     )
  //   }
  // },
  
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'Account',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="account-circle" size={28} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.main,
    style: {
      paddingVertical: 4,
      borderTopColor: "transparent"
    },
    borderTopColor: "transparent"
  },
});

const authNav = createBottomTabNavigator({
  Auth: {
    screen: Auth,
  },
},
{
  tabBarOptions: {
    activeTintColor: colors.main,
    style: {
      display: 'none'
    }
  },
});

// const noBottomNav = createBottomTabNavigator({
//   Article: {
//     screen: createStackNavigator({
//       Article: {
//         screen: Article,
//         title: 'Article',
//         navigationOptions: {
//           headerLeft: () => <HeaderBack screen={'Articles'} />,
//           headerRight: () => null,
//           headerTitle: () => null,
//         },
//       },
//     }),
//     navigationOptions: {
//       title: 'Article',
//     }
//   },
// },
// {
//   tabBarOptions: {
//     activeTintColor: colors.main,
//     style: {
//       display: 'none'
//     }
//   },
// });

const rootNavigator = createSwitchNavigator({
  AuthNav: authNav,
  // NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'AuthNav',
});

export default createAppContainer(rootNavigator);
