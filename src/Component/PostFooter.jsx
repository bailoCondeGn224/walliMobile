import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Like from "../Assect/imagPost/like.jpeg";
import Shock from "../Assect/imagPost/shock.jpeg";
import Heart from "../Assect/imagPost/heart.jpeg";
import Vector from "../Utits/Vectors/Vector";
import { ColorsLogin } from "../Utits/Vectors/ColorsLogin";

const PostFooter = ({ data }) => {
  return (
    <View style={styles.postFooterContainer}>
      <View style={styles.footerReactionSec}>
        <View style={styles.row}>
          <Image source={Like} style={styles.reactionIcon} />
          <Image source={Shock} style={styles.reactionIcon} />
          <Image source={Heart} style={styles.reactionIcon} />
          <Text style={styles.reactionCount}>{data.reaction}</Text>
        </View>
        <Text style={styles.reactionCount}>{data.comments} comments</Text>
      </View>
      <View style={styles.userActionSec}>
        <View style={styles.row}>
          <Vector
            name="like2"
            type="AntDesign"
            size={25}
            color={ColorsLogin.grey}
          />
          <Text style={styles.reactionCount}>Like</Text>
        </View>
        <View style={styles.row}>
          <Vector
            name="chatbox-outline"
            type="Ionicons"
            size={25}
            color={ColorsLogin.grey}
          />
          <Text style={styles.reactionCount}>Comment</Text>
        </View>
        <View style={styles.row}>
          <Vector
            name="arrow-redo-outline"
            type="Ionicons"
            size={25}
            color={ColorsLogin.grey}
          />
          <Text style={styles.reactionCount}>Share</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reactionIcon: {
    height: 20,
    width: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  postFooterContainer: {
    padding: 16,
  },
  reactionCount: {
    color: ColorsLogin.grey,
    fontSize: 14,
    paddingLeft: 5,
  },
  footerReactionSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: ColorsLogin.lightgrey,
    paddingBottom: 15,
  },
  userActionSec: {
    marginTop: 15,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default PostFooter;
