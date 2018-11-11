
import React, {Component} from 'react'
import {StyleSheet, Text, FlatList, View, TouchableOpacity} from 'react-native'
import Header from 'gui/Components/Header'
import { connect } from 'react-redux'
import { actionsType } from 'utils/reduxConstants'
import { width } from 'utils/globalStyles'
import { RouteKey } from 'utils/globalConstants'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
  componentDidMount () {
    console.log('HomeScreen')
    this.props.fetchUsers()
  }
  renderRightIcon = () => {
    return (
      <IconFontAwesome name='bars' style={{color: 'white', fontSize: 25}}/>
    )
  }
  rightAction = () => {
    console.log('this.props.navigation.toggleDrawer()', this.props.navigation, this.props)
  }
  renderUserCell = (ob) => {
    const user = ob.item
    const { gotoDetail } = this.props

    return (
      <TouchableOpacity
        onPress={() => gotoDetail(user)}
        style={styles.cell}>
        <Text>{user.name}</Text>
      </TouchableOpacity>
    )
  }
  render () {
    const { userState } = this.props

    return (
      <View style={styles.container}>
        <Header
          title={'HomeScreen'}
          rightAction={() => this.props.navigation.toggleDrawer()}
          rightIcon={this.renderRightIcon()}
        />
        <View style={styles.body}>
          <FlatList
            data={userState.users}
            keyExtractor={(_, index) => index.toString()}
            renderItem={this.renderUserCell}
            contentContainerStyle={styles.listContentPadding}
            style={styles.list}
          />
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  userState: state.userState
})
const mapactionsTypeToProps = (dispatch) => ({
  fetchUsers: () => dispatch({ type: actionsType.FETCH_USER, payload: { users: [], isLoading: true } }),
  updateUser: (users) => dispatch({ type: actionsType.UPDATE_USER_SUCCESS, payload: users }),
  gotoDetail: (user) => dispatch({ type: actionsType.PUSH, routeName: RouteKey.Detail, params: {user} })
})
export default connect(mapStateToProps, mapactionsTypeToProps)(HomeScreen)

const styles = StyleSheet.create({
  cell: {
    height: 50,
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
