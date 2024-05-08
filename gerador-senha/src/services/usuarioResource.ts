import axios from 'axios';
import {url} from './apiBase';

export const postUsuario = async (entidade) => {
  try {
    const response = await axios.post(`${url}/usuario`, entidade);
    return response.data;
  } catch (error) {
    if (error.response.status === 409) {
      throw new Error("Email já cadastrado");
    } else {
      throw new Error("Erro ao cadastrar usuário");
    }
  }
}

export const postUsuarioLogin = async (entidade) => {
  try {
    const response = await axios.post(`${url}/login`, entidade);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao fazer login");
  }
}