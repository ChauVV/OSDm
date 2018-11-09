import React from 'react'
import {
  View, StatusBar, StyleSheet
} from 'react-native'
import {connect} from 'react-redux'
import { AppNavigator } from 'frontend/Container/AppNavigator'

class MainLayout extends React.Component {
  render () {
    return <View style={styles.base}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"/>
      <View style={styles.base}>
        <AppNavigator />
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  }
})

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(MainLayout)
