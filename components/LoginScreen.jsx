import { View, TextInput, Text, StyleSheet, Pressable } from "react-native";
import { Background } from "./Background";
import { useState } from "react";

export const LoginScreen = () => {
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);

  return (
    <Background>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Адреса електронної пошти"
            style={emailIsFocused ? styles.focusedInput : styles.input}
            onFocus={() => setEmailIsFocused(true)}
            onBlur={() => setEmailIsFocused(false)}
            placeholderTextColor={"rgb(189, 189, 189)"}
          />
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Пароль"
              secureTextEntry={true}
              style={passwordIsFocused ? styles.focusedInput : styles.input}
              onFocus={() => setPasswordIsFocused(true)}
              onBlur={() => setPasswordIsFocused(false)}
              placeholderTextColor={"rgb(189, 189, 189)"}
            />
            <Pressable style={styles.passwordTextWrapper}>
              <Text style={styles.text}>Показати</Text>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Увійти</Text>
        </Pressable>
        <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadiusL: 25,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "rgb(232, 232, 232)",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 16,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  focusedInput: {
    width: "100%",
    height: 50,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 16,
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrapper: {
    width: "100%",
    gap: 16,
    marginBottom: 43,
  },
  submitButton: {
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },
  submitButtonText: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  passwordWrapper: {
    position: "relative",
  },
  passwordTextWrapper: {
    position: "absolute",
    top: 14,
    right: 16,
  },
});
