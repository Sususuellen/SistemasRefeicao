import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ViewStyle,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title?: string;
  height?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export default function ButtonComponent({
  title,
  children,
  style,
  ...rest
}: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {children}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
}
