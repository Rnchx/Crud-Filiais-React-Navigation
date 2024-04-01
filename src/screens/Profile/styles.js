import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#202020"
  },
  title: {
    fontSize: 25,
    color: "white",
    margin: 5
  },
  school: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#202020",
    borderRadius: 5,
    borderWidth: 4,
    borderColor: "#DAA520",
  },
  subtitleDetalhes: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "white",
    borderBottomWidth: 1,
    borderColor: "#DAA520",
  },
  text: {
    fontSize: 16,
    color: "white",
    margin: 1
  },
  schoolActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 15
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DAA520",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DC143C",
    minWidth: 70,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "600"
  }
});

export default styles;
