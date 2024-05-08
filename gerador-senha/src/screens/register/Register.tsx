import { Text, View, Alert } from "react-native";
import AppButtonSmall from "../../components/appButtonSmall/AppButtonSmall";
import AppLink from "../../components/appLink/AppLink";
import AppLoginInput from "../../components/appLoginInput/AppLoginInput";
import AppTitle from "../../components/appTitle/AppTitle";
import { styles } from "./RegisterStyle";
import { cadastrarUsuario } from "../../services/usuarioService";
import { useState } from "react";

export default function Register({ navigation }) {
  const goToLogin = () => {
    navigation.navigate("SignIn");
  };
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repeticaoSenha, setRepeticaoSenha] = useState("");

  const cadastrar = async () => {
    if (senha == "" || senha !== repeticaoSenha) {
      Alert.alert("Erro","Senhas não conferem");
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || !regex.test(email)){
      Alert.alert("Erro","Insira um email válido");
      return;
    }

    const usuario = {
      email: email,
      senha: senha
    }
    const response = await cadastrarUsuario(usuario);
    if (response.id != null) {
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso");
      navigation.navigate("SignIn");
    } else {
      Alert.alert("Erro",response);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppTitle text="SIGN UP"></AppTitle>
      </View>
      <View style={styles.body}>

        <View style={styles.bodyInput}>
          <Text>Email</Text>
          <AppLoginInput editable={true} text={email} onChangeText={(value) => setEmail(value)} placeholder="Digite seu email"></AppLoginInput>
        </View>
        <View style={styles.bodyInput}>
          <Text>Senha</Text>
          <AppLoginInput editable={true} onChangeText={(value) => setSenha(value)} text={senha} placeholder="Digite sua senha"></AppLoginInput>
        </View>
        <View style={styles.bodyInput}>
          <Text>Confirmar senha</Text>
          <AppLoginInput editable={true} onChangeText={(value) => setRepeticaoSenha(value)} text={repeticaoSenha} placeholder="Confirme sua senha"></AppLoginInput>
        </View>
        <View style={styles.btnCadastrar}>
          <AppButtonSmall text="Cadastrar" action={cadastrar} ></AppButtonSmall>
        </View>
        <View>
          <AppLink text="Voltar" action={goToLogin} ></AppLink>
        </View>
      </View>

    </View>
  )

}