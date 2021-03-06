import { Dimensions, StyleSheet, Platform } from 'react-native'

const CORE_RATIO = 667 / 375
export const MYWIDTH = Dimensions.get('window').width
export const MYHEIGHT = Dimensions.get('window').height
const MYSCALE = CORE_RATIO / (MYHEIGHT / MYWIDTH)
const guidelineBaseWidth = 375
const guidelineBaseHeight = 667

export const width = num => MYWIDTH * (num / 100)
export const height = num => MYHEIGHT * (num / 100)
export const scale = (size) => MYWIDTH / guidelineBaseWidth * size
export const verticalScale = (size) => MYHEIGHT / guidelineBaseHeight * size
export const heightScale = num => MYHEIGHT * (num * MYSCALE / 100)
export const ISIOS = Platform.OS === 'ios'

export const FONT = {
  OSWALD_LIGHT: 'Oswald-Light',
  OSWALD_LIGHT_ITALIC: 'Oswald-LightItalic',
  OSWALD_BOLD: 'Oswald-Bold',
  OSWALD_REGULAR: 'Oswald-Regular'
}

export const txtDefault = {
  color: 'white',
  fontSize: width(4),
  backgroundColor: 'transparent',
  fontFamily: FONT.OSWALD_LIGHT
}

export const COLORS = {
  RED: '#C21B17',
  BACKGROUND_COLOR: '#FF7043',
  LINE: '#a5abaf',
  TEXT: 'white',
  PING: '#FF7043'
}
const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
})

export default styles
