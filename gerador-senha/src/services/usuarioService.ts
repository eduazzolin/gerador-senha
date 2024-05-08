import { postUsuario, postUsuarioLogin } from "./usuarioResource"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { criptografarSenha } from "./apiBase";

export const cadastrarUsuario = async (entidade) => {
  try {
    entidade.senha = criptografarSenha(entidade.senha);
    const response = await postUsuario(entidade);
    return response;
  } catch (error) {
    return error.message;
  }
}

export const loginUsuario = async (entidade) => {
  try {
    entidade.senha = criptografarSenha(entidade.senha);
    const response = await postUsuarioLogin(entidade);
    await AsyncStorage.setItem("token", response.token);
    return response;
  } catch (error) {
    return error.message;
  }
  
}

