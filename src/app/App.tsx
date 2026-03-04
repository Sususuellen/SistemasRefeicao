import { StatusBar } from "expo-status-bar";
import { Alert, Text, View, FlatList, TouchableOpacity } from "react-native";
import ButtonComponent from "../components/ButtonComponent/index";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";
import { styles } from "./styles";
import { StatusOrcamento } from "../types/StatusOrcamento";
import InputComponent from "../components/InputComponent";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { orcamentoStorage } from "../storage/orcamentoStorage";
import { Orcamento } from "../interfaces/Orcamento";
import ModalComponent from "../components/ModalComponent";

export default function App() {
  const [itens, setItens] = useState<Orcamento[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [cliente, setCliente] = useState("");
  const [percDesconto, setPercDesconto] = useState("");

  function pegarDataAtual(): Date {
    return new Date();
  }

  async function getOrcamentos() {
    try {
      const itens = await orcamentoStorage.get();
      setItens(itens);
    } catch (err) {
      Alert.alert("Erro", "não foi possivel trazer os dados dos orçamentos");
    }
  }

  async function addOrcamento() {
    if (!titulo.trim() && !cliente.trim() && !percDesconto) {
      return Alert.alert("Error", `Preencha todos os campos, tente novamente.`);
    }

    const payload = {
      id: Math.random().toString().substring(2),
      titulo,
      cliente,
      status: StatusOrcamento.Enviado,
      percentualDesconto: Number(percDesconto),
      dataCriacao: pegarDataAtual(),
      itens: [],
    };

    await orcamentoStorage.add(payload);
    Alert.alert("Sucesso!", "Sucesso ao adicionar um novo orçamento!");
    await getOrcamentos();
  }

  useEffect(() => {
    getOrcamentos();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent
        nome="Wendell"
        qtdRegistros={0}
        onPressNovo={() => setModalVisible(true)}
      ></HeaderComponent>
      <View style={styles.search}>
        <InputComponent
          placeHolder="Titulo ou Cliente"
          style={{ width: 250 }}
          iconName="search"
        ></InputComponent>
        <TouchableOpacity style={styles.options}>
          <Ionicons name="options" size={20} color={"#6A46EB"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardComponent
            titulo={item.titulo}
            cliente={item.cliente}
            status={item.status}
            // percentualDesconto={item.desconto}
          ></CardComponent>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhum item cadastrado</Text>
        )}
      />
      <ModalComponent
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        title="Adicione um novo orçamento"
      >
        <View style={{ gap: 30, marginTop: 10 }}>
          <InputComponent
            placeHolder="Titulo"
            onChangeText={setTitulo}
            style={{ width: 250 }}
          ></InputComponent>
          <InputComponent
            placeHolder="Cliente"
            onChangeText={setCliente}
            style={{ width: 250 }}
          ></InputComponent>
          <InputComponent
            placeHolder="Percentual de desconto"
            onChangeText={setPercDesconto}
            style={{ width: 250 }}
          ></InputComponent>

          <ButtonComponent
            title="Adicionar novo orçamento"
            onPress={() => addOrcamento()}
          ></ButtonComponent>
        </View>
      </ModalComponent>
      <StatusBar style="auto" />
    </View>
  );
}
