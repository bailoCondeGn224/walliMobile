import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Appel from "../Assect/imagIcon/appel.png";
import localisation from "../Assect/imagIcon/locatio.png";
import WWW from "../Assect/imagIcon/www.png";
import Share from "../Assect/imagIcon/share.png";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import { Linking } from "react-native";

const ActionButton = ({ product }) => {
  const handleOpenLinking = (item) => {
    Linking.openURL(item);
  };
  const IconAction = [
    {
      id: 1,
      name: "appel",
      icon: Appel,
      url: `tel:${product.tele}`,
    },
    {
      id: 2,
      name: "localisation",
      icon: localisation,
      url: `geo:${product.localisation}`,
    },
    {
      id: 3,
      name: "site web",
      icon: WWW,
      url: product.site,
    },
    {
      id: 4,
      name: "partager",
      icon: Share,
      url: product.site,
    },
  ];

  const numColumns = 4;

  return (
    <View style={styles.iconContaint}>
      <FlatList
        data={IconAction}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.iconItem}>
            <TouchableOpacity
              key={item.id}
              style={styles.iconItems}
              onPress={() => handleOpenLinking(item.url)}
            >
              <Image source={item.icon} style={{ width: 30, height: 30 }} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        key={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContaint: {
    backgroundColor: ColorsLogin.white,
    padding: 4,
  },
  iconItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  iconItems: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActionButton;
