import { Text, View, TouchableOpacity } from "react-native";
import { Orcamento } from "../../interfaces/Orcamento";
import { StatusOrcamento } from "../../types/StatusOrcamento";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import ButtonComponent from "../ButtonComponent";

const statusConfig = {
  [StatusOrcamento.Rascunho]: {
    label: "Rascunho",
    bg: "#E5E7EB",
    color: "#6B7280",
    dot: "#9CA3AF",
  },
  [StatusOrcamento.Enviado]: {
    label: "Enviado",
    bg: "#DBEAFE",
    color: "#2563EB",
    dot: "#2563EB",
  },
  [StatusOrcamento.Aprovado]: {
    label: "Aprovado",
    bg: "#DCFCE7",
    color: "#16A34A",
    dot: "#16A34A",
  },
  [StatusOrcamento.Recusado]: {
    label: "Recusado",
    bg: "#FEE2E2",
    color: "#DC2626",
    dot: "#DC2626",
  },
};

type CardOrcamentoProps = {
  titulo: string;
  cliente: string;
  valor: number;
  status: StatusOrcamento;
  onPressExcluir: () => void;
  onPressEditar: () => void;
};

export default function CardComponent({
  titulo,
  cliente,
  valor,
  status,
  onPressExcluir,
  onPressEditar,
}: CardOrcamentoProps) {
  const config = statusConfig[status];

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{titulo}</Text>

        <View style={[styles.statusContainer, { backgroundColor: config.bg }]}>
          <View style={[styles.dot, { backgroundColor: config.dot }]} />
          <Text style={[styles.statusText, { color: config.color }]}>
            {config.label}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.cliente}>{cliente}</Text>

        <Text style={styles.valor}>
          R$ <Text style={styles.valorBold}>{valor.toFixed(2)}</Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => onPressExcluir()}>
          <Ionicons name="trash-outline" size={20} />
        </TouchableOpacity>
        <ButtonComponent
          title="Editar Orçamento"
          style={styles.editButton}
          onPress={() => onPressEditar()}
        ></ButtonComponent>
      </View>
    </TouchableOpacity>
  );
}
