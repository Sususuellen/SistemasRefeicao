import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    fontFamily: "lato",
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingTop: 70,
  },
  listContent: {
    paddingBottom: 62,
    paddingTop: 24,
  },
  search: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEF0F5",
    marginVertical: 16,
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
  },
  emptyText: {
    textAlign: "center",
    color: "#808080",
    fontSize: 14,
    fontWeight: 600,
  },
  pickerContainer: {
    width: 250,
    height: 50,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
});
