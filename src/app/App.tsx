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
import { Picker } from "@react-native-picker/picker";
import LoadingComponent from "../components/LoadingComponent";

export default function App() {
  const [itens, setItens] = useState<Orcamento[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [cliente, setCliente] = useState("");
  const [percDesconto, setPercDesconto] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [orcamentoId, setOrcamentoId] = useState("");
  const [statusOrcamento, setStatusOrcamento] = useState(
    StatusOrcamento.Rascunho,
  );
  const [dataCriacao, setDataCriacao] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);

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
    if (!titulo.trim() || !cliente.trim() || !percDesconto) {
      return Alert.alert("Erro", "Preencha todos os campos.");
    }

    setIsLoading(true);

    const payload = {
      id: Math.random().toString().substring(2),
      titulo,
      cliente,
      status: StatusOrcamento.Rascunho,
      percentualDesconto: Number(percDesconto),
      dataCriacao: pegarDataAtual(),
      itens: [],
    };

    await orcamentoStorage.add(payload);
    Alert.alert("Sucesso!", "Sucesso ao adicionar um novo orçamento!");
    await getOrcamentos();

    setIsLoading(false);
    setModalVisible(false);

    setTitulo("");
    setCliente("");
    setPercDesconto("");
  }

  async function excluirOrcamento(item: Orcamento) {
    setIsLoading(true);
    await orcamentoStorage.remove(item);
    Alert.alert("Sucesso", "Sucesso ao remover um orçamento");
    setIsLoading(false);
    await getOrcamentos();
  }

  async function salvarOrcamento() {
    if (!titulo.trim() || !cliente.trim() || !percDesconto?.trim()) {
      return Alert.alert("Error!", "Preencha um campo!");
    }

    setIsLoading(true);

    const payload = {
      id: orcamentoId,
      titulo,
      cliente,
      status: statusOrcamento,
      percentualDesconto: Number(percDesconto),
      dataCriacao: dataCriacao,
      itens: [],
    };

    await orcamentoStorage.update(payload);
    await getOrcamentos();
    setIsLoading(false);
    fecharModal();
  }

  function abrirModalCriar() {
    setIsEditing(false);
    setModalVisible(true);
  }

  function abrirModalEditar(item: Orcamento) {
    setIsEditing(true);
    setOrcamentoId(item.id);
    setTitulo(item.titulo);
    setCliente(item.cliente);
    setPercDesconto(item.percentualDesconto?.toString() || "");
    setDataCriacao(item.dataCriacao);
    setModalVisible(true);
  }

  function fecharModal() {
    setTitulo("");
    setCliente("");
    setPercDesconto("");
    setModalVisible(false);
  }

  useEffect(() => {
    getOrcamentos();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent
        nome="Wendell"
        qtdRegistros={itens.length}
        onPressNovo={() => abrirModalCriar()}
      ></HeaderComponent>
      <View style={styles.search}>
        <InputComponent
          placeHolder="Titulo ou Cliente"
          style={{ width: 350 }}
          iconName="search"
        ></InputComponent>
        <TouchableOpacity style={styles.options}>
          <Ionicons name="options" size={20} color={"#2AA1D9"} />
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
            valor={item.percentualDesconto ?? 0}
            onPressExcluir={() => excluirOrcamento(item)}
            onPressEditar={() => abrirModalEditar(item)}
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
        onClose={() => fecharModal()}
        title={isEditing ? "Adicione um novo orçamento" : "Edite seu orçamento"}
      >
        <View style={{ gap: 30, marginTop: 10, alignItems: "center" }}>
          <InputComponent
            placeHolder="Titulo"
            value={titulo}
            onChangeText={setTitulo}
            style={{ width: 250 }}
          ></InputComponent>
          <InputComponent
            placeHolder="Cliente"
            value={cliente}
            onChangeText={setCliente}
            style={{ width: 250 }}
          ></InputComponent>
          <InputComponent
            placeHolder="Percentual de desconto"
            value={percDesconto}
            onChangeText={setPercDesconto}
            style={{ width: 250 }}
            keyboardType="numeric"
          ></InputComponent>
          {isEditing && (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={statusOrcamento}
                onValueChange={(value) =>
                  setStatusOrcamento(value as StatusOrcamento)
                }
                style={{ flex: 1 }}
              >
                {Object.values(StatusOrcamento)
                  .filter((v) => typeof v === "string")
                  .map((status) => (
                    <Picker.Item
                      key={status}
                      label={status as string}
                      value={
                        StatusOrcamento[status as keyof typeof StatusOrcamento]
                      }
                    />
                  ))}
              </Picker>
            </View>
          )}
          {isEditing && dataCriacao && (
            <Text>
              Data de criação: {dataCriacao.toLocaleDateString("pt-BR")}
            </Text>
          )}
          <ButtonComponent
            title={isEditing ? "Salvar alterações" : "Adicionar novo orçamento"}
            onPress={isEditing ? salvarOrcamento : addOrcamento}
          ></ButtonComponent>
        </View>
      </ModalComponent>
      <StatusBar style="auto" />
      <LoadingComponent isLoading={isLoading} />
    </View>
  );
}
