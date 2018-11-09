
import { connect } from 'react-redux'
import SplashScreen from 'gui/Screens/SplashSceen'
import LoginScreen from 'gui/Screens/LoginScreen'
import MainScreen from 'gui/Screens/MainScreen'
import A from 'gui/Screens/A'
import B from 'gui/Screens/B'
import C from 'gui/Screens/C'
import DrawerContent from 'gui/Screens/DrawerContent'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

import {
  reduxifyNavigator
} from 'react-navigation-redux-helpers'

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
  state: state.navigate
})

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState)

export { RootNavigator, AppNavigator }
