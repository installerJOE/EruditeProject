import { StyleSheet } from "react-native";
import { styles, colors } from "./main";

const modalStyle = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },

  header: {
    padding: 20, 
    backgroundColor: '#f1f1f1', 
    borderTopEndRadius: 10, 
    borderTopStartRadius: 10,
    borderBottomColor: colors.green,
    borderBottomWidth: 1
  },
  
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 0,
  },
  
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  
  buttonClose: {
    backgroundColor: '#fff',
    borderColor: colors.red,
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 20
  },
  
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export { modalStyle };