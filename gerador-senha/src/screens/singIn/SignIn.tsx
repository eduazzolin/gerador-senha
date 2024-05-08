import { Text, View } from "react-native";
import AppButtonSmall from "../../components/appButtonSmall/AppButtonSmall";
import AppLoginInput from "../../components/appLoginInput/AppLoginInput";
import AppTitle from "../../components/appTitle/AppTitle";
import { styles } from "./SignInStyle";
import { useState } from "react";
import { loginUsuario } from "../../services/usuarioService";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");




  const login = async () => {

    if (email == "" || senha == "") {
      alert("Preencha todos os campos");
      return;
    }

    const usuario = {
      email: email,
      senha: senha
    }

    try {
      const response = await loginUsuario(usuario);
      if (response.auth) {
        navigation.navigate("Home");
      } else {
        alert("Usuário ou senha inválidos");
        return;
      }
    } catch (error) {
      if (error.message == "401") {
        alert("Usuário ou senha inválidos");
        return;
      } else {
        alert("Erro ao realizar login");
        return;
      }
    }

  };

  const cadastro = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppTitle text="SIGN IN"></AppTitle>
      </View>
      <View style={styles.body}>

        <View style={styles.bodyInput}>
          <Text>Email</Text>
          <AppLoginInput editable={true} text={email} onChangeText={(value) => setEmail(value)} placeholder="Digite seu email"></AppLoginInput>
        </View>
        <View style={styles.bodyInput}>
          <Text>Senha</Text>
          <AppLoginInput editable={true} text={senha} onChangeText={(value) => setSenha(value)} placeholder="Digite sua senha"></AppLoginInput>
        </View>
        <View style={styles.btnLogin}>
          <AppButtonSmall text="Login" action={login} ></AppButtonSmall>
        </View>
        <View style={styles.cadastro}>
          <Text>Não possui uma conta?</Text>
          <Text style={styles.link} onPress={cadastro}>Cadastre-se</Text>
        </View>
      </View>

    </View>
  )

}