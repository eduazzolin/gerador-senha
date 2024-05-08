import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./AppPasswordCardStyle";

interface AppPasswordCardProps {
  password: string;
  service: string;
  copyAction: any;
  deleteAction: any;
}

export default function AppPasswordCard({ password, service, copyAction, deleteAction }: AppPasswordCardProps) {

  const hiddenPassword = "**********";
  const [passwordValue, setPasswordValue] = useState(hiddenPassword);
  const [serviceValue, setServiceValue] = useState(service);
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordAction = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setPasswordValue(hiddenPassword);
    } else {
      setPasswordValue(password);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Text style={styles.service}>{serviceValue}</Text>
        <View style={styles.containerButtons}>
          <Pressable style={styles.button} onPress={showPasswordAction}>
            <Ionicons name="eye-outline" size={32} color="black" />
          </Pressable>
          <Pressable style={styles.button} onPress={copyAction}>
            <Ionicons name="copy-outline" size={32} color="black" />
          </Pressable>
          <Pressable style={styles.button} onPress={deleteAction}>
            <Ionicons name="trash-outline" size={32} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.secoundRow}>
        <Text style={styles.password}>{passwordValue}</Text>
      </View>

    </View>
  )


}