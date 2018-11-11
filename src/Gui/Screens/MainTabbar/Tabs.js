import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { COLORS, width } from 'utils/globalStyles'
import Icon from 'react-native-vector-icons/Ionicons'

const renderHeaderItem = (props) => {
  const { goToPage, activeTab, tabs } = props
  const TAB_OPTIONS = [
    {
      key: 0,
      image: 'ios-home',
      title: 'Home'
    },
    {
      key: 1,
      image: 'ios-settings',
      title: 'Settings'
    }]

  return (
    <View style={styles.tabs}>
      {tabs.map((tab, i) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            disabled={activeTab === i}
            key={i.toString()}
            onPress={() => goToPage(i)}
            style={[styles.itemTab, {backgroundColor: activeTab === i ? 'white' : '#eeeeee'}]}>
            <Icon
              name={TAB_OPTIONS[i].image}
              style={{
                color: activeTab === i ? 'red' : '#7e7e7e',
                fontSize: 20
              }}
            />
            <Text
              style={{fontSize: 13, color: activeTab === i ? COLORS.RED : '#7e7e7e'}}>
              {TAB_OPTIONS[i].title}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
export default renderHeaderItem

const styles = StyleSheet.create({
  itemTab: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  tabs: {
    flexDirection: 'row',
    width: width(100),
    height: 50,
    backgroundColor: '#eeeeee',
    justifyContent: 'space-between'
  }
})
