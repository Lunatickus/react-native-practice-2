import { ImageBackground, View, Image, TextInput, Button, Text } from "react-native";
import BacckgroundImage from "../images/PhotoBG.jpeg";

export const RegistrationScreen = () => {
  return (
    <View>
      <ImageBackground source={BacckgroundImage}>
      <View>
        <View>
          <Image />
          <Button title="add image" />
        </View>
        <Text>Реєстрація</Text>
        <TextInput />
        <TextInput />
        <TextInput />
        <Button title="Зареєструватися" />
        <Text>Вже є акаунт? Увійти</Text>
      </View>
      </ImageBackground>
    </View>
  );
};
