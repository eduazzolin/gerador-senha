import { TextInput } from "react-native";
import { styles } from "./AppInputStyle";


interface AppinputProps {
  text?: string;
  placeholder?: string;
  editable?: boolean;
}

export default function AppInput({
  text,
  placeholder,
  editable=true
}: AppinputProps) {
  return (
    <TextInput
    editable={editable}
    value={text}
    placeholder={placeholder}
    style={styles.text}
    />
  );
}