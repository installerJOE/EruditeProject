import React from 'react'
import { StyleSheet, Text } from 'react-native'

const MyAppText = (props) => {
  return (
    <Text style={styles.textStyle}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
    fontSize: 14
  }
})

export default MyAppText