import { readFile } from "fs/promises";

export async function readJSONFile(filePath) {
  try {
    const data = await readFile(new URL(filePath, import.meta.url));
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler ou analisar o arquivo JSON:", error);
    throw error; // Rejeita a Promise para que quem chamou possa tratar o erro
  }
}
