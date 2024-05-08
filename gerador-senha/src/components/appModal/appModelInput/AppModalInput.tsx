import { TextInput } from "react-native";
import { styles } from "./AppModalInputStyle";


interface AppinputProps {
  text?: string;
  placeholder?: string;
  editable?: boolean;
  onChangeText?: (newValue: string) => void;
}

export default function AppInput({
  text,
  placeholder,
  editable = true,
  onChangeText
}: AppinputProps) {
  return (
    <TextInput
      editable={editable}
      value={text}
      placeholder={placeholder}
      style={styles.text}
      onChangeText={onChangeText}
    />
  );
}