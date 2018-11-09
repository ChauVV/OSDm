
import React, {Component} from 'react'
import {
  StyleSheet, View, Image
} from 'react-native'
import Images from 'assets/Images'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import { width, height, COLORS } from 'utils/globalStyles'
import { actionsType } from 'utils/reduxConstants'

class SplashScreenRN extends Component {
  componentDidMount () {
    SplashScreen.hide()
    setTimeout(
      () =>
        this.props.checkAuthen()
      , 6000
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={Images.icWindyWhite}
          resizeMode='center'
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})
const mapactionsTypeToProps = (dispatch) => ({
  checkAuthen: () => dispatch({ type: actionsType.CHECK_AUTHEN })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(SplashScreenRN)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width(100),
    height: height(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  img: {
    alignSelf: 'center',
    width: 240,
    height: 128
  }
})
