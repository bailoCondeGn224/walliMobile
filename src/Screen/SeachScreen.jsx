import { Image, StyleSheet, Text, View } from "react-native";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const SeachScreen = ({ img, price, type, nbrChambre }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={img} style={styles.categoriImg} />
          <Text style={styles.text1}>{price}</Text>
          <Text style={styles.text1}>{type}</Text>
          <Text style={styles.text1}>{nbrChambre}</Text>
        </View>
      </View>
    </>
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
    height: 235,
    width: 112,
  },
  categoriImg: {
    height: 178,
    width: 110,
    borderRadius: 10,
  },
});

export default SeachScreen;
