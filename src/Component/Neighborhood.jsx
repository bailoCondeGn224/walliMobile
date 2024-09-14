import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import quartiersConakry from "../data/Quartier";

const Neighborhood = () => {
  return (
    <View style={styles.neighborhoodContainer}>
      {quartiersConakry.map((item) => {
        <Text style={styles.neighborhoodText} key={item.id}>
          {item.name}
        </Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  neighborhoodContainer: {
    marginTop: 8,
    alignItems: "center",
  },
  neighborhoodText: {
    color: ColorsLogin.black,
    backgroundColor: ColorsLogin.white,
    padding: 12,
    borderRadius: 15,
  },
});

export default Neighborhood;
