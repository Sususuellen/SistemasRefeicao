import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    gap: 15,
    width: 400,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    flex: 1,
    paddingRight: 10,
  },

  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
  },

  statusText: {
    fontSize: 14,
    fontWeight: "500",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cliente: {
    fontSize: 16,
    color: "#6B7280",
  },

  valor: {
    fontSize: 18,
  },

  valorBold: {
    fontSize: 22,
    fontWeight: "700",
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  editButton: {
    width: 140,
    backgroundColor: "#2AA1D9",
  },
});
