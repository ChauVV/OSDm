
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import SplashScreen from 'gui/Screens/SplashSceen'
import LoginScreen from 'gui/Screens/LoginScreen'
import HomeScreen from 'gui/Screens/HomeScreen'
import Setting from 'gui/Screens/Setting'
import Detail from 'gui/Screens/Detail'
import DrawerContent from 'gui/Screens/DrawerContent'
import MainTabbar from 'gui/Screens/MainTabbar'

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
const SettingStack = createStackNavigator({
  SettingScreen: { screen: Setting }
}, {
  headerMode: 'none'
})
const MainNavigator = createStackNavigator({
  MainTabbar: MainTabbar,
  HomeStack: HomeStack,
  SettingStack: SettingStack
}, {
  headerMode: 'none'
})

MainNavigator.navigationOptions = ({ navigation }) => navigation.state.index === 0 ? { drawerLockMode: 'unlocked' } : { drawerLockMode: 'locked-closed' } // Only open drawer for main screen

const Drawer = createDrawerNavigator({
  MainTabbar: {
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
