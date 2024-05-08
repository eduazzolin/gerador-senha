import { GestureResponderEvent, Pressable, Text } from "react-native";
import { styles } from "./AppButtonStyle";

interface AppButtonProps {
  text: string;
  type?: string;
  action?: (event: GestureResponderEvent) => void;
}

export default function AppButton({text, type='primary', action}: AppButtonProps) {
  const buttonStyle = type === 'secondary' ? styles.secondaryButton : styles.button;
  const textStyle = type === 'secondary' ? styles.secondaryText : styles.text;
  return (
    <Pressable style={buttonStyle}  onPress={(e) => action(e)}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  )
}
