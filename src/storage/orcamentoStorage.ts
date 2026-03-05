import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusOrcamento } from "../types/StatusOrcamento";
import { Orcamento } from "../interfaces/Orcamento";

const STORAGE_KEY = "@adicionar:orcamento";

async function get(): Promise<Orcamento[]> {
  try {
    const storage = await AsyncStorage.getItem(STORAGE_KEY);

    if (!storage) return [];

    const parsed: Orcamento[] = JSON.parse(storage);

    return parsed.map((item) => ({
      ...item,
      dataCriacao: new Date(item.dataCriacao),
    }));
  } catch (error) {
    throw new Error("ORCAMENTOS_GET: " + error);
  }
}

async function getByStatus(status: StatusOrcamento): Promise<Orcamento[]> {
  const itens = await get();

  return itens.filter((item) => item.status === status);
}

async function save(items: Orcamento[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error("ORCAMENTOS_SAVE: " + error);
  }
}

async function add(newItem: Orcamento): Promise<Orcamento[]> {
  const items = await get();
  const updatedItems = [...items, newItem];
  await save(updatedItems);

  return updatedItems;
}

async function excluirOrcamento() {}

async function update(item: Orcamento): Promise<Orcamento[]> {
  if (!item.id) throw new Error("ORCAMENTO_ERROR: ID não fornecido!");

  const items = await get();

  const updatedItems = items.map((orcamento) =>
    orcamento.id === item.id ? item : orcamento,
  );

  await save(updatedItems);

  return updatedItems;
}

async function remove(item: Orcamento): Promise<Orcamento[]> {
  if (!item.id) throw new Error("ORCAMENTO_ERROR!");

  const items = await get();

  const updatedItems = items.filter((orcamento) => orcamento.id !== item.id);

  await save(updatedItems);

  return updatedItems;
}

async function removeAll(): Promise<void> {
  await AsyncStorage.clear();
}

export const orcamentoStorage = {
  get,
  getByStatus,
  add,
  update,
  remove,
  removeAll,
};
