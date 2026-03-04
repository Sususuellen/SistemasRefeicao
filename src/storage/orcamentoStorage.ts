import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusOrcamento } from "../types/StatusOrcamento";
import { Orcamento } from "../interfaces/Orcamento";

const STORAGE_KEY = "@adicionar:orcamento";


async function get(): Promise<Orcamento[]> {
  try {
    const storage = await AsyncStorage.getItem(STORAGE_KEY);

    return storage ? JSON.parse(storage) : [];
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

export const orcamentoStorage = {
  get,
  getByStatus,
  add,
};
