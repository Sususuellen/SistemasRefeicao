import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    padding: 10,
    display: "flex",
    backgroundColor: "#e9e9e9",
    width: 400,
    gap: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status: {
    color: "#FFF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "300",
  },
});
