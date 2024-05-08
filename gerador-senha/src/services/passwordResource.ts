import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import { url } from './apiBase';

const getToken = async () => {
  return await AsyncStorage.getItem("token");
}

export const getSenhas = async () => {
  const userToken = await getToken();
  const reqUrl = `${url}/items`;
  try {
    const response = await axios.get(reqUrl, {
      headers: {
        Authorization: userToken
      }
    });
    return response ? response.data : [];
  } catch (e) {
    throw new Error("Erro ao buscar senhas");
  }
};

export const postSenhas = async (entidade) => {
  const userToken = await getToken();
  try {
    const response = await axios.post(`${url}/items`, entidade, {
      headers: {
        Authorization: userToken
      }
    });
    return response;
  } catch (error) {
    if (error.response.status === 409) {
      throw new Error("Senha já cadastrada");
    } else {
      throw new Error("Erro ao salvar senha");
    }
  }
};

export const deleteSenha = async (id) => {
  const userToken = await getToken();
  try {
    const response = await axios.delete(`${url}/item/${id}`, {
      headers: {
        Authorization: userToken
      }
    });
    if (response.status !== 200) {
      throw new Error("Erro ao remover senha");
    }
    return response.status;
  } catch (error) {
    throw new Error("Erro ao remover senha");
  }


};

