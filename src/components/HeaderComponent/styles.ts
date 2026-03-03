import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
  },
  button: {
    display: "contents",
    alignItems: "center",
    justifyContent: "center",
  },
});
