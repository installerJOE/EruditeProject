import React from 'react'
import { SafeAreaView } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { styles } from '../../../assets/css/main'

const IndexScreen = () => {
  return (
    <SafeAreaView style={[styles.centeredBlock]}>
      <View style={[styles.container, styles.pdHorizontal1]}>
        <Text>
            Which programme are you interested in?
        </Text>
      </View>

      <View style={styles.fixToText}>
        <SelectList
          setSelected={(val) => setSelected(val)} 
          data={studyProgrammes} 
          save="id"
        />
      </View>
    </SafeAreaView>
  )
}

export default IndexScreen