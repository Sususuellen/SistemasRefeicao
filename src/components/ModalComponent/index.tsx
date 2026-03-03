import { Text, View, TouchableOpacity } from "react-native";

type Props = {
  titulo: String;
};

export default function ModalComponent({ titulo, ...rest }: Props) {
  return (
    <View>
      <View>
        <Text>{titulo}</Text>
        <TouchableOpacity
          onPress={() => console.log("Clicado para fechar")}
        ></TouchableOpacity>
      </View>
    </View>
  );
}
