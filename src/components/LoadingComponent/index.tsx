import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

type Props = {
  isLoading: boolean;
};

export default function LoadingComponent({ isLoading }: Props) {
  if (!isLoading) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2AA1D9" />
      </View>
    </View>
  );
}
