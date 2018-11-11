
import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tabs from './Tabs'
import HomeScreen from 'gui/Screens/HomeScreen'
import Setting from 'gui/Screens/Setting'

export default class MainTabbar extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          ref = {ref => { this.tabbar = ref }}
          renderTabBar={() => { return <Tabs/> } }
          locked={true}
          tabBarPosition={'bottom'}
        >
          <HomeScreen />
          <Setting />
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
