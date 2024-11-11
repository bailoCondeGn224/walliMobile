import React, { useEffect } from "react";
import {
  Image,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  BackHandler,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import IoniconsHeart from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import ActionButton from "./ActionButton";
import AboutScreen from "./AboutScreen";

const HeadeDetailScreen = ({ imageUrl }) => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-sharp"
            size={24}
            color={ColorsLogin.primaryColor}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <IoniconsHeart name="heart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Image
        source={imageUrl.postImg}
        style={{
          width: width,
          height: height / 3,
        }}
      />
      <View style={styles.containtName}>
        <Text style={styles.productName}>{imageUrl.name}</Text>
        <Text style={styles.describName}>{imageUrl.adress}</Text>
      </View>
      <ActionButton product={imageUrl} />
      <AboutScreen product={imageUrl.description} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    top: 10,
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 18,
    color: ColorsLogin.black,
    fontWeight: "700",
    padding: 4,
  },
  describName: {
    fontSize: 12,
    color: ColorsLogin.grey,
    fontWeight: "400",
    padding: 4,
  },
  containtName: {
    padding: 20,
    marginTop: -20,
    backgroundColor: ColorsLogin.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default HeadeDetailScreen;
