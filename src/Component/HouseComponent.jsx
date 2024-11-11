import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import SeachScreen from "../Screen/SeachScreen";
import { CategorieData } from "../data/CategorieData";

const HouseComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.categorieText}>Catégories populaires</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {CategorieData.map((data) => (
          <SeachScreen
            key={data.id}
            img={data.categorieImg}
            price={data.price}
            type={data.type}
            nbrChambre={data.nbrChambre}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
  },
  categorieText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
  scrollView: {
    paddingVertical: 3,
  },
});

export default HouseComponent;
