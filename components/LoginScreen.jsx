import { ImageBackground, View } from "react-native";
import BacckgroundImage from "../images/PhotoBG.jpeg";

export const LoginScreen = () => {
  return (
    <View>
      <ImageBackground source={BacckgroundImage} />
      <View>
        <Text>Реєстрація</Text>
        <TextInput />
        <TextInput />
        <TextInput />
        <Button />
        <Text>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
};
