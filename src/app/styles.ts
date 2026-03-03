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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#EEF0F5",
    marginVertical: 16,
  },
  options: {
    display: "flex",
    alignContent: "center",
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  emptyText: {
    textAlign: "center",
    color: "#808080",
    fontSize: 14,
    fontWeight: 600,
  },
});
