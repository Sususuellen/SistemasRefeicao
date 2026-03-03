import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import ButtonComponent from "../components/ButtonComponent/index";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";
import { styles } from "./styles";
import { StatusOrcamento } from "../types/StatusOrcamento";
import InputComponent from "../components/InputComponent";
import { Ionicons } from "@expo/vector-icons";

const ORCAMENTOS = [
  {
    id: "1",
    titulo: "Compra de metal",
    status: StatusOrcamento.Enviado,
    cliente: "Usimetais",
    desconto: 100000,
  },
  {
    id: "2",
    titulo: "Compra de Livros",
    status: StatusOrcamento.Aprovado,
    cliente: "Araivas",
    desconto: 50000,
  },
  {
    id: "3",
    titulo: "Compra de cachorro",
    status: StatusOrcamento.Recusado,
    cliente: "PetVet",
    desconto: 100,
  },
  {
    id: "4",
    titulo: "Compra de ração",
    status: StatusOrcamento.Recusado,
    cliente: "Casa das Rações",
    desconto: 3000,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent nome="Wendell" qtdRegistros={0}></HeaderComponent>
      <View style={styles.search}>
        <InputComponent
          placeHolder="Titulo ou Cliente"
          style={{ width: 250 }}
          iconName="search"
        ></InputComponent>
        <TouchableOpacity style={styles.options}>
          <Text style={{ display: "flex", alignItems: "center" }}>
            <Ionicons name="options" size={20} color={"#6A46EB"} />
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ORCAMENTOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardComponent
            titulo={item.titulo}
            cliente={item.cliente}
            status={item.status}
            percentualDesconto={item.desconto}
          ></CardComponent>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhum item cadastrado</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
