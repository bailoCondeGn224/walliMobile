import React from "react";
import { Image, StyleSheet, View, ScrollView } from "react-native";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { PostData } from "../data/PostData";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const Profil = () => {
  return (
    <ScrollView style={styles.postContainer}>
      {PostData.map((item) => (
        <View key={item.id}>
          <PostHeader
            profileImg={item.profileImg}
            name={item.name}
            date={item.date}
            caption={item.caption}
          />
          <Image source={item.postImg} style={styles.postImg} />
          <PostFooter data={item} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: ColorsLogin.white,
    marginTop: 8,
  },
  postImg: {
    width: "100%",
    height: 250,
  },
});

export default Profil;
