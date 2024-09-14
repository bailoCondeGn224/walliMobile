import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import Profil from "../Assect/image/img1.jpeg";
import CameraRoll from "../Assect/image/cameraroll.png";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const SubHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={Profil} style={styles.profilStyles} />
      <TextInput
        placeholder="Ecrire quelque chose ici..."
        style={styles.inputBox}
      />
      <Image source={CameraRoll} style={styles.cameraroll} />
    </View>
  );
};
const styles = StyleSheet.create({
  profilStyles: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    backgroundColor: ColorsLogin.white,
    alignItems: "center",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: ColorsLogin.borderGrey,
    borderRadius: 30,
    paddingHorizontal: 20,
    width: "70%",
  },
});
export default SubHeader;
