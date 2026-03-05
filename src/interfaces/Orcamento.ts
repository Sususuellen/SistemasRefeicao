import { StatusOrcamento } from "../types/StatusOrcamento";
import { ItemServico } from "./ItemServico";

export interface Orcamento {
  id: string;
  cliente: string;
  titulo: string;
  itens?: ItemServico[];
  percentualDesconto?: number;
  status: StatusOrcamento;
  dataCriacao: Date;
  dataAtualizacao?: Date;
}
