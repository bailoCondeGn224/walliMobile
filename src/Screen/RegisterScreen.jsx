import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Vector from "../Utits/Vectors/Vector";
import Logo from "../../src/Assect/imageLogo1.png";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const RegisterScreen = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [userName, setUserName] = useState("");
  const [passWordConfirm, setPassWordConfirm] = useState("");
  const [pasWord, sePasWord] = useState("");

  const onCreatAcount = () => {
    navigation.navigate("LoginScreen");
  };

  const onClickHomeScreen = () => {
    navigation.navigate("TopTabbar");
  };
  return (
    <View style={styles.container}>
      <Vector
        name="arrow-back"
        type="Ionicons"
        size={20}
        color={ColorsLogin.black}
        onPress={onCreatAcount}
      />

      <View style={styles.Subcontainer}>
        <Image source={Logo} style={styles.logoStyle} />

        <TextInput
          placeholder="nom et prenom"
          value={userName}
          onChangeText={(value) => setUserName(value)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="numero de télephone ou email"
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
        <TextInput
          placeholder="confirmé mot de passe"
          value={passWordConfirm}
          onChangeText={(value) => setPassWordConfirm(value)}
          style={styles.inputBox}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={onClickHomeScreen}
        >
          <Text style={styles.loginText}>Inscription</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.creatCompte} onPress={onCreatAcount}>
          <Text style={styles.compteText}>J'ai déja un compte</Text>
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
    marginVertical: "10%",
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
    marginTop: "15%",
  },
  compteText: {
    color: ColorsLogin.primaryColor,
    fontSize: 14,
    fontWeight: "400",
  },
});
export default RegisterScreen;
