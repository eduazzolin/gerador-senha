import { TextInput } from "react-native";
import { styles } from "./AppLoginInputStyle";


interface AppLoginInputProps {
  text?: string;
  placeholder?: string;
  editable?: boolean;
  onChangeText?: (newValue: string) => void;
}

export default function AppLoginInput({
  text,
  placeholder,
  editable=true,
  onChangeText
}: AppLoginInputProps) {
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