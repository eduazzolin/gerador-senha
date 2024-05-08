import * as Clipboard from 'expo-clipboard';
import { deleteSenha, getSenhas, postSenhas } from "./passwordResource";

export const generatePassword = (passwordLenght = 12) => {
  let palavraNova: string = '';
  for (let i = 0; i < passwordLenght; i++) {
    let random = Math.random() * (127 - 33) + 33;
    palavraNova += String.fromCharCode(random);
  }
  return palavraNova;
};

export const copyToClipboard = async (password) => {
  await Clipboard.setStringAsync(password);
};

export const salvarSenha = async (value) => {
  try {
    const response = await postSenhas(value);
    return response;
  } catch (e) {
    return e.message;
  }
}

export const buscarSenhas = async () => {
  try {
    const senhas = await getSenhas();
    return senhas;
  } catch (e) {
    return e.message;
  }
}

export const removerSenha = async (id) => {
  try {
    await deleteSenha(id);
    return "Senha removida com sucesso";
  } catch (e) {
    return e.message;
  }
};


