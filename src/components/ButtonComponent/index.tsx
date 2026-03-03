import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title?: string;
  height?: number;
  children?: React.ReactNode;
};

export default function ButtonComponent({ title, children, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {children}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
}
