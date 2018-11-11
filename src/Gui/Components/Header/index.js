import React, { PureComponent } from 'react'
import {
  View, Text, StyleSheet,
  TouchableOpacity
} from 'react-native'

import { isIphoneX } from 'react-native-iphone-x-helper'
import { height, ISIOS, COLORS } from 'utils/globalStyles'

export default class Header extends PureComponent {
  render () {
    const {
      title = '',
      leftIcon = null,
      leftAction = () => {},
      rightIcon = null,
      rightAction = () => {}
    } = this.props

    return (
      <View style={styles.header}>
        {leftIcon &&
          <TouchableOpacity style={styles.leftIcon}
            onPress={() => {
              leftAction()
            }}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          >
            {leftIcon}
          </TouchableOpacity>
        }
        <View style={styles.titleContainer}>
          <Text style={styles.textHeader}>{title}</Text>
        </View>
        { rightIcon &&
          <View style={styles.groubBtnRight}>
            <TouchableOpacity style={styles.icCalendar} onPress={rightAction}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            >
              {rightIcon}
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: ISIOS ? isIphoneX() ? 98 : 64 : 44,
    backgroundColor: COLORS.BACKGROUND_COLOR,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0
  },
  textHeader: {
    fontSize: height(3.5),
    color: 'white'
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
    width: 60,
    height: '100%',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    justifyContent: 'center'
  },
  groubBtnRight: {
    position: 'absolute',
    right: 20,
    height: '100%',
    paddingTop: ISIOS ? isIphoneX() ? 34 : 12 : 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
})
