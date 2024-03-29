import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#202020"
  },
  title1: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
  titlePage: {
    margin: 10,
  },
  title: {
    color: "#DAA520",
    fontWeight: "800"
  },
  schoolItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DAA520",
  },
  schoolActions: {
    flexDirection: "row",
    gap: 10,
  },
  schoolName: {
    fontSize: 16,
    color: "#D8D8D8",
    fontWeight: "bold",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#4CAF50",
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
  },
  detailsButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DC143C",
    minWidth: 70,
    alignItems: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "700"
  },
});

export default styles;
