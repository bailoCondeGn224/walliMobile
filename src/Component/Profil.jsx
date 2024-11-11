import React from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
// import PostHeader from "./PostHeader";
// import PostFooter from "./PostFooter";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import HouseComponent from "./HouseComponent";
import CategorieComponent from "./CategorieComponent";

const Profil = () => {
  return (
    <ScrollView style={styles.postContainer}>
      <HouseComponent />
      <CategorieComponent />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: ColorsLogin.white,
    marginTop: 8,
  },
  postImg: {
    width: "100%",
    height: 250,
  },
});
export default Profil;
