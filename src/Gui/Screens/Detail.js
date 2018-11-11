import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import Header from 'gui/Components/Header'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { actionsType } from 'utils/reduxConstants'
import { COLORS } from 'utils/globalStyles'

class Detail extends Component {
  render () {
    const { pop } = this.props
    const user = this.props.navigation.getParam('user', {})
    console.log('user: ', user)

    return (
      <View style={styles.container}>
        <Header
          title={'Detail'}
          leftAction={() => pop()}
          leftIcon={<IconFontAwesome name='chevron-left' style={{color: 'white', fontSize: 25}}/>}
        />
        <View style={styles.body}>
          <View style={styles.avatarBorder}>
            <Image source={{uri: user.avatar}} style={styles.avatar} resizeMode={'contain'}/>
          </View>
          <View style={styles.info}>
            <Text style={styles.text}>
              <Text style={styles.infoTitle}>{'Name: '}</Text>
              <Text>{user.name}</Text>
            </Text>
            <Text style={styles.text}>
              <Text style={styles.infoTitle}>{'Age: '}</Text>
              <Text>{user.age}</Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  userState: state.userState
})
const mapactionsTypeToProps = (dispatch) => ({
  pop: () => dispatch({ type: actionsType.POP })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(Detail)

const styles = StyleSheet.create({
  info: {
    marginTop: 20
  },
  text: {
    fontSize: 20
  },
  infoTitle: {
    fontWeight: 'bold'
  },
  avatarBorder: {
    overflow: 'hidden',
    marginTop: 40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  avatar: {
    flex: 1
  },
  body: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
