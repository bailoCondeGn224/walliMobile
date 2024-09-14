import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../../src/Assect/imageLogo1.png";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [pasWord, sePasWord] = useState("");

  const onCreatAcount = () => {
    navigation.navigate("RegisterScreen");
  };

  const onAccessHome = () => {
    navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.Subcontainer}>
        <Image source={Logo} style={styles.logoStyle} />
        <TextInput
          placeholder="numero de télephone ou email"
          // style={[styles.inputBox, { borderColor: ColorsLogin.grey }]}
          value={mail}
          onChangeText={(value) => setMail(value)}
          style={styles.inputBox}
        />

        <TextInput
          placeholder="mot de passe"
          value={pasWord}
          onChangeText={(value) => sePasWord(value)}
          style={styles.inputBox}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onAccessHome}>
          <Text style={styles.loginText}>Connexion</Text>
        </TouchableOpacity>
        <Text style={styles.passwordForgot}>Mot de passe ounblié</Text>

        <TouchableOpacity style={styles.creatCompte} onPress={onCreatAcount}>
          <Text style={styles.compteText}>Creer un compte</Text>
        </TouchableOpacity>

        <Text style={styles.passwordForgot}>Walli Group</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  Subcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyle: {
    height: 50,
    width: 50,
    marginVertical: "20%",
  },
  inputBox: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    width: "95%",
    marginTop: 12,
    borderColor: ColorsLogin.grey,
  },
  loginButton: {
    backgroundColor: ColorsLogin.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 12,
    width: "95%",
    padding: 10,
  },
  loginText: {
    color: ColorsLogin.white,
    fontSize: 16,
    fontWeight: "500",
  },
  passwordForgot: {
    color: ColorsLogin.grey,
    fontSize: 14,
    fontWeight: "500",
    marginTop: 12,
  },
  creatCompte: {
    borderColor: ColorsLogin.primaryColor,
    borderWidth: 1,
    borderRadius: 12,
    width: "95%",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    marginTop: "25%",
  },
  compteText: {
    color: ColorsLogin.primaryColor,
    fontSize: 14,
    fontWeight: "400",
  },
});

export default LoginScreen;
