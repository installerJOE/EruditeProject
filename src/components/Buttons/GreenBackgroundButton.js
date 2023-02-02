import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles, colors } from '../../assets/css/main'

const GreenBackgroundButton = ({text, handleClick}) => {
  return (
    <TouchableOpacity onPress={handleClick} style={[styles.btnSm, styles.btnGreenBd]}>
      <Text style={[styles.textCenter, { color: colors.white, fontSize: 16}]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default GreenBackgroundButton