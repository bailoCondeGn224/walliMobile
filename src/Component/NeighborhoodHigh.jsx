import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import quartiersConakry from "../data/Quartier";

const NeighborhoodHigh = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {quartiersConakry.map((item) => (
          <View style={styles.neighborhoodItem} key={item.id}>
            <Text style={styles.neighborhoodText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  scrollContainer: {
    marginTop: 0,
  },
  neighborhoodItem: {
    marginRight: 4,
  },
  neighborhoodText: {
    color: ColorsLogin.black,
    backgroundColor: ColorsLogin.white,
    padding: 6,
    borderRadius: 15,
  },
});

export default NeighborhoodHigh;
