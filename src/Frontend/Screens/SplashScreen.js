
import React, {Component} from 'react'
import {
  StyleSheet, View, Image
} from 'react-native'
import Images from 'assets/Images'
import { connect } from 'react-redux'

import { ISIOS, width, height } from 'utils/globalStyles'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { actionsType } from 'utils/reduxConstants'

class SplashScreen extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={Images.imgSplashScreen}
          resizeMode={ISIOS ? 'cover' : 'stretch'}
        />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  // internet: state.internet
})
const mapactionsTypeToProps = (dispatch) => ({
  fetchUsers: () => dispatch({ type: actionsType.FETCH_USER })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(SplashScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    height: height(100),
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: ISIOS ? isIphoneX() ? 46 : 20 : 0
  },
  img: {
    width: '100%',
    height: '100%'
  }
})
