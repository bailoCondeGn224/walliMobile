import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";
import Vector from "../Utits/Vectors/Vector";

const PostHeader = ({ profileImg, name, date, caption }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.postTopSec}>
        <View style={styles.row}>
          <Image source={profileImg} style={styles.userPost} />
          <View style={styles.userSection}>
            <Text style={styles.userName}>{name}</Text>
            <View style={styles.row}>
              <Vector
                name="users"
                type="Entypo"
                size={15}
                color={ColorsLogin.grey}
                style={styles.userIcon}
              />
              <Text style={styles.dot}>.</Text>
              <Text style={styles.days}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <Vector
            name="dots-three-horizontal"
            type="Entypo"
            size={25}
            color={ColorsLogin.grey}
            style={styles.headerIcon}
          />
          <Vector
            name="close"
            type="Ionicons"
            size={25}
            color={ColorsLogin.grey}
          />
        </View>
      </View>
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeaderContainer: {
    marginTop: 4,
    padding: 14,
    backgroundColor: ColorsLogin.white,
  },
  userPost: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  row: {
    flexDirection: "row",
  },
  postTopSec: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 16,
    color: ColorsLogin.textColor,
    marginBottom: 3,
  },
  userSection: {
    marginLeft: 12,
  },
  days: {
    fontSize: 14,
    color: ColorsLogin.textGrey,
    paddingHorizontal: 8,
  },
  dot: {
    fontSize: 14,
    color: ColorsLogin.textGrey,
    paddingHorizontal: 8,
  },
  userIcon: {
    marginTop: 1,
  },
  headerIcon: {
    marginRight: 20,
  },
  caption: {
    color: ColorsLogin.grey,
    fontSize: 15,
    marginTop: 10,
  },
});

export default PostHeader;
