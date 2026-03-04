import { View, Text } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../ButtonComponent";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

type props = {
  nome: string;
  qtdRegistros: number;
  onPressNovo: () => void;
};

export default function HeaderComponent({
  nome,
  qtdRegistros,
  onPressNovo,
  ...rest
}: props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Seja bem vindo, <Text style={{ fontWeight: "bold" }}>{nome}!</Text>
        </Text>
        {qtdRegistros > 0 ? (
          <Text style={styles.text}>Você tem {qtdRegistros} orçamentos</Text>
        ) : (
          <Text style={styles.text}>Você não possui orçamentos</Text>
        )}
      </View>
      <View style={styles.button}>
        <ButtonComponent
          title="Novo"
          onPress={() => {
            onPressNovo();
          }}
        >
          <AntDesign name="plus" size={14} color="white" />
        </ButtonComponent>
      </View>
    </View>
  );
}
