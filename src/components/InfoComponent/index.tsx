import { Modal, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { ComponentProps, useEffect } from "react";

type Props = {
  titulo: string;
  isErro?: boolean;
  mensagem: string;
  visible: boolean;
  onClose: () => void;
};

export default function InfoComponent({
  titulo,
  isErro = false,
  mensagem,
  visible,
  onClose,
}: Props) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const iconName = isErro ? "alert-circle-outline" : "checkmark-circle-outline";

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Ionicons
              name={iconName}
              size={25}
              color={isErro ? "#dc7820" : "#25d141"}
            />
            <Text
              style={[
                styles.title,
                isErro ? { color: "#dc7820" } : { color: "#25d141" },
              ]}
            >
              {titulo}
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={{ fontSize: 20 }}>{mensagem}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
