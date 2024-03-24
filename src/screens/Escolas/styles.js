import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  schoolItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  schoolDetailButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    marginRight: 10,
  },
  schoolActions: {
    flexDirection: "row",
    gap: 10,
  },
  schoolName: {
    fontSize: 16,
    color: "#333",
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
    backgroundColor: "#ADD8E6",
    minWidth: 70,
    alignItems: "center",
  },
});

export default styles;
