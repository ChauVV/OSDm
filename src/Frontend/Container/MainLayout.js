import React from 'react'
import {
  View, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import { AppNavigator } from 'frontend/Container/AppNavigator'

class MainLayout extends React.Component {
  render () {
    // const {
    //   showGlobalIndicator
    // } = this.props

    return <View style={styles.base}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"/>
      <View style={styles.base}>
        <AppNavigator />
      </View>
      {/* {showGlobalIndicator ? <IndicatorDialog message={'Vui lòng chờ...'}/> : null} */}
    </View>
  }
}

const styles = {
  base: {
    flex: 1
  }
}
const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapactionsTypeToProps)(MainLayout)
