import { StyleSheet } from "react-native";
import { styles, colors } from "./main";

const settingsStyle = StyleSheet.create({
  profileImage: {

  },
  
  profileElementsBlock: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },

  profileElementContainer: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  profileElementHeader: {
    color: '#626262',
    padding: 10,
    fontSize: 14,
  },

  profileElementBody: {
    color: colors.black,
    marginTop: -10,
  },

  passport: {
    borderRadius: 100,
    height: 200,
    width: 200,
    margin: 'auto',
  }
})

export { settingsStyle };