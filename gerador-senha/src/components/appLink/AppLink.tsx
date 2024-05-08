import { GestureResponderEvent, Pressable, Text } from "react-native";
import { styles } from "./AppLinkStyle";

interface AppLinkProps {
  text: string;
  action?: (event: GestureResponderEvent) => void;
}

export default function AppLink({ text, action}:AppLinkProps){
  return (
    <Pressable onPress={(e) => action(e)}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}