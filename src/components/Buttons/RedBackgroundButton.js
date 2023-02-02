import React from 'react'
import { TouchableOpacity, Text} from 'react-native'
import { styles, colors } from '../../assets/css/main'

const RedBackgroundButton = ({text, handleClick}) => {
  return (
    <TouchableOpacity onPress={handleClick} style={[styles.btnSm, styles.btnDanger, styles.mt1]}>
      <Text style={[styles.textCenter, { color: colors.red, fontSize: 16}]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default RedBackgroundButton