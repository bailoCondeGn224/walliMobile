import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import CategorieScreen from "../Screen/CategorieScreen";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import { CategorieDataDetail } from "../data/CategorieData";
import { useNavigation } from "@react-navigation/native";

const CategorieComponent = () => {
  const navigation = useNavigation();
  const handlePress = (type) => {
    navigation.navigate("ProductScreen", { category: type });
  };

  return (
    <ScrollView>
      <Text style={styles.categorieText}>Catégories</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {CategorieDataDetail.map((data) => (
          <TouchableOpacity
            key={data.id}
            onPress={() => handlePress(data.category)}
            style={styles.categorieItem}
          >
            <CategorieScreen
              img={data.categorieImg}
              type={data.type}
              navigation={navigation}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categorieItem: {
    margin: 4,
  },
  categorieText: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CategorieComponent;
