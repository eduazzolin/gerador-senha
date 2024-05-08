import { Text } from "react-native";
import { styles } from "./AppTitleStyle";

interface AppTitle {
  text: string;
}

export default function AppTitle({ text }: AppTitle) {
  return <Text style={styles.text}>{text}</Text>;
}