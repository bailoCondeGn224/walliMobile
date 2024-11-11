import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import PostHeader from "../Component/PostHeader";
import PostFooter from "../Component/PostFooter";
import { ProductData } from "../data/ProductData";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const category = route.params?.category || "catégorieParDéfaut";

  console.log("category reçu :", category);
  console.log("valeur:", ProductData);

  const filteredProducts = ProductData.filter(
    (item) =>
      item.category.trim().toLowerCase() === category.trim().toLowerCase()
  );

  console.log("Produits filtrés :", filteredProducts);

  if (filteredProducts.length === 0) {
    return <Text>Aucun produit disponible pour cette catégorie</Text>;
  }

  return (
    <ScrollView>
      {filteredProducts.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.push("DescribeScreen", { productId: item.id })
          }
        >
          <View>
            <PostHeader
              profileImg={item.profileImg}
              name={item.name}
              date={item.date}
              caption={item.caption}
            />
            <Image source={item.postImg} style={styles.postImg} />
            <PostFooter data={item} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postImg: {
    width: "100%",
    height: 250,
  },
});

export default ProductScreen;
