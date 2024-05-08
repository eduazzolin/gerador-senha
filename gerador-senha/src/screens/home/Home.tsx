import { useEffect, useState } from "react";
import { Vibration, View } from "react-native";
import logo from "../../../assets/logo.png";
import AppButton from "../../components/appButton/AppButton";
import AppImage from "../../components/appImage/AppImage";
import AppInput from "../../components/appInput/AppInput";
import AppModal from "../../components/appModal/AppModal";
import { buscarSenhas, copyToClipboard, generatePassword, salvarSenha } from "../../services/passwordService";
import { styles } from "./HomeStyle";


export default function Home({ navigation }) {
  const [password, setPassword] = useState("");
  const [passwords, setPasswords] = useState([]);

  const goToHistory = async () => {
    navigation.navigate("History");
  };

  const setRandomPassword = async () => {
    Vibration.vibrate(150);
    const newPassword = generatePassword(12);
    setPassword(newPassword)
  };

  const openModalSalvarSenha = async () => {
    setModalVisible(true);
  }

  const mountHome = async () => {
    const result = await buscarSenhas();
    setPasswords(result);
  };

  useEffect(() => {
    mountHome();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <AppModal
        password={[password, setPassword]}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        salvarSenhaService={salvarSenha}
        title="Salvar senha">
      </AppModal>
      <View style={styles.header}>
        <AppImage image={logo}></AppImage>
      </View>
      <View style={styles.body}>
        <View>
          <AppInput
            text={password}
            editable={false}
            placeholder="#######"
          />
        </View>
        <View >
          <AppButton action={openModalSalvarSenha} text="Salvar" />
        </View>
        <View style={styles.firstRow}>
          <View style={styles.firstRow_b1}>
            <AppButton action={goToHistory} type="secondary" text="Senhas salvas" />
          </View>
          <View style={styles.firstRow_b2}>
            <AppButton action={() => copyToClipboard(password)} type="secondary" text="Copiar" />
          </View>
        </View>
        <View >
          <AppButton action={setRandomPassword} text="Gerar senha" />
        </View>
      </View>
    </View >
  )

}