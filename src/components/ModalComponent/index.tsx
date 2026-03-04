import { Text, View, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { styles } from "./styles";

type Props = {
  title?: String;
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function ModalComponent({
  visible,
  onClose,
  title,
  children,
  ...rest
}: Props) {
  const [isVisible, setVisible] = useState(false);

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
            {title && <Text style={styles.title}>{title}</Text>}

            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={30} color={"#bb2222"} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}
