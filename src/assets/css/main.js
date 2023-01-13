import React from 'react';

import {StyleSheet} from 'react-native'


const colors = {
  lightGrey: '#efefef',
  orange: '#e3770b',
  white: '#ffffff',
  green: '#0ca544',
  darkGreen: '#02170a',
  black: '#000',
  darkGrey: '#424242'
}

const fontSizes = {
  font10: 10,
  font14: 14,
  font16: 16,
  font18: 18,
  font21: 21,
  font24: 24,
  font28: 28,
  font32: 32,
  font36: 36,
  font40: 40,
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    height: 1,
    width: 15,
    backgroundColor: colors.lightGrey,
    alignSelf: 'center'
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

  highlight: {
    fontWeight: '700',
  },

  headerBlock: {
    backgroundColor: colors.green,
    height: 70
  },

  header: {
    fontSize: 28,
    fontWeight: "bold", 
  },

  subHeader: {
    fontSize: 21,
    fontWeight: "bold",
    backgroundColor: colors.lightGrey,
    padding: 10,
    color: colors.orange,
  },

  captionHeader: {
    fontSize: 18,
    color: colors.darkGrey,
  },

  paragraph: {
    fontSize: 18,
    marginVertical: 10,
    flexDirection: 'row',
  },

  formControl: {
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.white,
  },

  btn: {
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: fontSizes.font16
  },

  btnHover: {
    backgroundColor: colors.orange
  },

  btnOrangeBg: {
    borderWidth: 1,
    backgroundColor: colors.orange,
    color: colors.white,
  },

  btnGreenBg: {
    borderWidth: 1,
    backgroundColor: colors.green,
    color: colors.white,
  },

  // fixToText: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // }, 

  container: {
    width: '100%',
    padding: 20
  }, 

  listContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
  },

  centeredBlock: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },

  mb0: {
    marginBottom: 10
  }, 
  mb1: {
    marginBottom: 20
  }, 
  mb2: {
    marginBottom: 30
  }, 
  mb3: {
    marginBottom: 40
  }, 
  mb4: {
    marginBottom: 50
  }, 
  mb5: {
    marginBottom: 60
  }, 

  mt0: {
    marginTop: 10
  }, 
  mt1: {
    marginTop: 20
  }, 
  mt2: {
    marginTop: 30
  }, 
  mt3: {
    marginTop: 40
  }, 
  mt4: {
    marginTop: 50
  }, 
  mt5: {
    marginTop: 60
  }, 

  pdHorizontal1: {
    paddingHorizontal: 40
  },

  textCenter: {
    textAlign: 'center'
  },

  textLeft: {
    textAlign: 'left'
  },

  textRight: {
    textAlign: 'right'
  },

  textUnderlined: {
    textDecorationLine: 'underline'
  },

  textBlack: {
    color: colors.black
  },

  textDarkGrey: {
    color: '#424242'
  },

  textOrange: {
    color: colors.orange
  },

  textWhite: {
    color: colors.white
  },
  
  textGreen: {
    color: colors.green
  },

  textLightGrey: {
    color: colors.lightGrey
  },
});

export {styles, colors};