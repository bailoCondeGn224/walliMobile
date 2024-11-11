import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const CategorieScreen = ({ img, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={img} style={styles.categoriImg} />
        <Text style={styles.text1}>{type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderWidth: 1,
    borderColor: ColorsLogin.lightgrey,
    backgroundColor: ColorsLogin.white,
    borderRadius: 10,
    marginLeft: 2,
  },
  text1: {
    fontSize: 12,
    color: ColorsLogin.grey,
  },
  containerImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: ColorsLogin.primaryColor,
    borderRadius: 10,
    height: 180,
    width: 200,
  },
  categoriImg: {
    height: 150,
    width: 180,
    borderRadius: 10,
  },
});

export default CategorieScreen;
