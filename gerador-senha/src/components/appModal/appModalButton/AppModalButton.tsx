import { Pressable, Text } from "react-native";
import { styles } from "./AppModalButtonStyle";

interface AppButtonProps {
  text: string;
  action?: any;
}

export default function AppButton({ text, action }: AppButtonProps) {
  return (
    <Pressable style={styles.button} onPress={(e) => action(e)}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
