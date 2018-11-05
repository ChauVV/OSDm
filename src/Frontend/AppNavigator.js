
import { connect } from 'react-redux'
import SplashScreen from 'frontend/Screens/SplashScreen'
import LoginScreen from 'frontend/Screens/LoginScreen'
import MainScreen from 'frontend/Screens/MainScreen'
import A from 'frontend/Screens/A'
import B from 'frontend/Screens/B'
import C from 'frontend/Screens/C'
import DrawerContent from 'frontend/Screens/DrawerContent'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

const middlewareNav = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const MainNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  A: { screen: A },
  B: { screen: B },
  C: { screen: C }
}, {
  headerMode: 'none'
})

MainNavigator.navigationOptions = ({ navigation }) => navigation.state.index === 0 ? { drawerLockMode: 'unlocked' } : { drawerLockMode: 'locked-closed' } // Only open drawer for main screen

const Drawer = createDrawerNavigator({
  MainScreens: {
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
  state: state.nav
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator, middlewareNav }
