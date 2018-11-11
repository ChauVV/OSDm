import React from 'react'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import SplashScreen from 'gui/Screens/SplashSceen'
import LoginScreen from 'gui/Screens/LoginScreen'
import HomeScreen from 'gui/Screens/HomeScreen'
import Setting from 'gui/Screens/Setting'
import Detail from 'gui/Screens/Detail'
import DrawerContent from 'gui/Screens/DrawerContent'
import Icon from 'react-native-vector-icons/Ionicons'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigate
)
const HomeStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Detail: { screen: Detail }
}, {
  headerMode: 'none'
})
const MainNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: { screen: Setting }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-home`
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`
        }

        return <Icon name={iconName} style={{color: focused ? 'red' : '#7e7e7e', fontSize: 20}} />
      }
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray'
    }
  }
)
// const MainNavigator = createStackNavigator({
//   MainTabbar: MainTabbar,
//   HomeStack: HomeStack,
//   SettingScreen: { screen: Setting }
// }, {
//   headerMode: 'none'
// })

MainNavigator.navigationOptions = ({ navigation }) => navigation.state.index === 0 ? { drawerLockMode: 'unlocked' } : { drawerLockMode: 'locked-closed' } // Only open drawer for main screen

const Drawer = createDrawerNavigator({
  MainNavigator: {
    screen: MainNavigator,
    navigationOptions: {
      gesturesEnabled: true
    }
  }
},
{
  drawerPosition: 'right',
  contentComponent: DrawerContent,
  drawerWidth: 300
})

const RootNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Drawer: {
    screen: Drawer,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
}, {
  headerMode: 'none'
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root')
const mapStateToProps = state => ({
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
