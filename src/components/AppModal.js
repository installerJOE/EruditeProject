import React, { useState } from 'react'
import {Button, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Modal from "react-native-modal";
import { colors, styles } from '../assets/css/main';
import { modalStyle } from '../assets/css/modal';
import MyAppText from './MyAppText';

const AppModal = ({showModal, closeModal, title, body}) => {
  return (
    <Modal 
      isVisible={showModal} 
      style={[modalStyle.centeredView,]} 
      backdropColor={colors.darkGreen} 
      backdropOpacity={0.9}
    >
      <View style={[modalStyle.modalView]}>
        <View style={[modalStyle.header, {backgroundColor: colors.lightGrey}]}>
          <Text style={[styles.captionHeader, styles.textBold, styles.textBlack]}>
            {title}
          </Text>
        </View>

        <View style={{padding: 20, paddingVertical: 30}}>
          <MyAppText>
            {body}
          </MyAppText>

          <TouchableOpacity
            style={[modalStyle.button, modalStyle.buttonClose]}
            onPress={closeModal}
          >
            <Text style={[modalStyle.textStyle, styles.textRed]}>
              Exit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default AppModal