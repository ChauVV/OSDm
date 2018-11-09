import React from 'react'

import storeRedux from 'reduxer/store'
import { Provider } from 'react-redux'

import {
  View, StatusBar, StyleSheet
} from 'react-native'
import { AppNavigator } from 'gui/AppNavigator'

const App = () => {
  return (
    <Provider store={storeRedux}>
      <View style={styles.base}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"/>
        <View style={styles.base}>
          <AppNavigator />
        </View>
      </View>
    </Provider>
  )
}
const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})
export default App
