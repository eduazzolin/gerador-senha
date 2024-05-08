import { useEffect, useState } from "react";
import { ScrollView, ToastAndroid, View } from "react-native";
import AppButtonSmall from "../../components/appButtonSmall/AppButtonSmall";
import AppPasswordCard from "../../components/appPasswordCard/AppPasswordCard";
import AppTitle from "../../components/appTitle/AppTitle";
import { buscarSenhas, copyToClipboard, removerSenha } from "../../services/passwordService";
import { styles } from "./HistoryStyle";

export default function History({ navigation }) {
  const [passwordList, setPasswordList] = useState([]);

  const mountHistory = async () => {
    let senhasAtualizadas = await buscarSenhas();
    if (typeof senhasAtualizadas === 'string') {
      ToastAndroid.show(senhasAtualizadas, ToastAndroid.SHORT);
      senhasAtualizadas = [];
    }
    setPasswordList(senhasAtualizadas);
  };

  useEffect(() => {
    mountHistory();
  }, []);

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const removerSenhaEAtualizar = async (name) => {
    const response = await removerSenha(name);
    await mountHistory();
    ToastAndroid.show(response, ToastAndroid.SHORT);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppTitle text="HISTÓRICO DE SENHAS" />
      </View>
      <ScrollView style={styles.body}>
        {
          passwordList.map((password, key) => (
            <View style={styles.cards} key={password.id}>
              <AppPasswordCard
                key={password.id}
                password={password.senha}
                service={password.nome}
                copyAction={() => copyToClipboard(password.senha)}
                deleteAction={() => removerSenhaEAtualizar(password.id)}>
              </AppPasswordCard>
            </View>
          ))
        }
      </ScrollView>
      <AppButtonSmall
        text="Voltar"
        action={goToHome}
      ></AppButtonSmall>
    </View >
  )

}