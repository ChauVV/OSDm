
import React, {Component} from 'react'
import {
  StyleSheet, View, Image, Text
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
    const { users, places } = this.props

    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={Images.imgSplashScreen}
          resizeMode={ISIOS ? 'cover' : 'stretch'}
        />
        <Text style={styles.text}>abc</Text>
        {users.length > 0 &&
          <Text style={styles.textUser}>{`Has ${users.length} users`}</Text>
        }
        {places.length > 0 &&
          <Text style={styles.textPlace}>{`Has ${places.length} places`}</Text>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  places: state.places
})
const mapactionsTypeToProps = (dispatch) => ({
  fetchUsers: () => dispatch({ type: actionsType.FETCH_USER }),
  updateUser: (users) => dispatch({ type: actionsType.UPDATE_USER_SUCCESS, payload: users })
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
  },
  text: {
    position: 'absolute',
    bottom: 10
  },
  textUser: {
    position: 'absolute',
    bottom: 30
  },
  textPlace: {
    position: 'absolute',
    bottom: 50
  }
})
