import { Text, View, TouchableOpacity } from "react-native";
import { Orcamento } from "../../interfaces/Orcamento";
import { StatusOrcamento } from "../../types/StatusOrcamento";
import { styles } from "./styles";

const statusColors: Record<StatusOrcamento, string> = {
  [StatusOrcamento.Rascunho]: "#6B7280",
  [StatusOrcamento.Enviado]: "#2564ebc2",
  [StatusOrcamento.Aprovado]: "#16a34aa9",
  [StatusOrcamento.Recusado]: "#dc2626c5",
};

type CardOrcamentoProps = {
  titulo: string;
  cliente: string;
  status: StatusOrcamento;
  percentualDesconto?: number;
};

export default function CardComponent(props: CardOrcamentoProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.titulo}
          </Text>
          <Text
            style={[
              styles.status,
              { backgroundColor: statusColors[props.status] },
            ]}
          >
            {StatusOrcamento[props.status]}
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 15 }}>{props.cliente}</Text>
          <Text style={{ fontSize: 20 }}>
            R$
            <Text style={{ fontWeight: "bold" }}>
              {props.percentualDesconto ?? 0}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
