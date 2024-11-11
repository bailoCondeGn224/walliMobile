import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import HeadeDetailScreen from "../Screen/HeadeDetailScreen";
import { ProductData } from "../data/ProductData";

const DescribeScreen = () => {
  const route = useRoute();
  const { productId } = route.params;
  const product = ProductData.find((product) => product.id === productId);
  if (!product) {
    return <Text>Produit introuvable</Text>;
  }

  return (
    <View>
      <HeadeDetailScreen imageUrl={product} />
    </View>
  );
};

export default DescribeScreen;
