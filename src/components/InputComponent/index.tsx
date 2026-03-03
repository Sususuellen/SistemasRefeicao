import { View, TextInput, TextStyle, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

type props = {
  placeHolder?: string;
  style?: ViewStyle;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
};

export default function InputComponent({
  placeHolder,
  style,
  iconName,
  iconColor,
}: props) {
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <Ionicons
          name={iconName}
          size={20}
          style={styles.icon}
          color={iconColor}
        />
      )}
      <TextInput placeholder={placeHolder} style={styles.text} />
    </View>
  );
}
