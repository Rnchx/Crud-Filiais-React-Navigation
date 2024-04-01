import { StyleSheet } from "react-native";
import { HoverEffect } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#202020"
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "white"
  },
  schoolInput: {
    padding: 8,
    width: 300,
    borderBottomColor: "#DAA520",
    borderBottomWidth: 1,
    color: "white",
  },
  containerButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  button: {
    padding: 2,
    backgroundColor: "#DAA520",
    width: 150,
    borderRadius: 2,
    margin: 5
  },
  buttonCancel: {
    padding: 2,
    backgroundColor: "#DC143C",
    width: 150,
    borderRadius: 2,
    margin: 5
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    textAlign: "center"
  }
});

export default styles;
