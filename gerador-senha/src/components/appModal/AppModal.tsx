import React, { useState } from 'react';
import { Alert, Modal, Text, ToastAndroid, View } from 'react-native';
import { styles } from "./AppModalStyle";
import AppModalButton from "./appModalButton/AppModalButton";
import AppModalInput from "./appModelInput/AppModalInput";

interface AppModalProps {
  password: [string, any];
  modalVisible: boolean;
  setModalVisible: any;
  title: string;
  salvarSenhaService: any;
}

export default function AppModal({ password, modalVisible, setModalVisible, title, salvarSenhaService }: AppModalProps) {
  const [passwordValue, setPasswordValue] = password;
  const [nomeValue, setNomeValue] = useState('');
  const handlePasswordChange = (newValue) => {
    setPasswordValue(newValue);
  };
  const handleNomeChange = (newValue) => {
    setNomeValue(newValue);
  };

  const salvarSenha = async (senha: string, nome: string) => {
    const entidade = {
      nome: nome,
      senha: senha
    }
    const retorno = await salvarSenhaService(entidade);
    if (retorno.status != null && retorno.status == 201) {
      setModalVisible(!modalVisible);
      setNomeValue('');
      ToastAndroid.show("Senha cadastrada com sucesso.", ToastAndroid.SHORT);
    } else {
      Alert.alert('Erro', retorno);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.modalTextTitle}>{title}</Text>
          </View>
          <View>
            <Text style={styles.modalText}>Nome:</Text>
            <AppModalInput text={nomeValue} onChangeText={handleNomeChange}></AppModalInput>
          </View>
          <View>
            <Text style={styles.modalText}>Senha:</Text>
            <AppModalInput text={passwordValue} onChangeText={handlePasswordChange}></AppModalInput>
          </View>
          <View style={styles.buttons}>
            <AppModalButton
              text='Salvar'
              action={() => salvarSenha(passwordValue, nomeValue)}>
            </AppModalButton>
            <AppModalButton text='Cancelar' action={() => setModalVisible(!modalVisible)}></AppModalButton>
          </View>
        </View>
      </View>
    </Modal>
  )
}