import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LogoName from "../Assect/w.png";
import Vector from "../Utits/Vectors/Vector";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoName} style={styles.fbLogoStyle} />
      <View style={styles.headerIcons}>
        <View style={styles.searchBg}>
          <Vector
            name="search"
            type="FontAwesome5"
            size={19}
            color={ColorsLogin.grey}
          />
        </View>
        <View style={styles.searchBg}>
          <Vector
            name="notifications"
            type="Ionicons"
            size={22}
            color={ColorsLogin.grey}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  fbLogoStyle: {
    height: 25,
    width: 130,
  },
  searchBg: {
    backgroundColor: ColorsLogin.lightgrey,
    height: 35,
    width: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  container: {
    backgroundColor: ColorsLogin.white,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerIcons: {
    flexDirection: "row",
  },
});
export default Header;
