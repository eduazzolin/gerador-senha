import { Image, ImageSourcePropType } from "react-native";
import { styles } from "./AppImageStyle";

interface AppImage {
  image: ImageSourcePropType;
}

export default function AppTitle({image}: AppImage){
  return <Image source={image} style={styles.image} />;
}