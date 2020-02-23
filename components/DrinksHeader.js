import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/colors";

const DrinksHeader = ({ changeScreen }) => (
  <View style={styles.header}>
    <Text style={styles.title}>Drinks</Text>
    <FontAwesome
      style={styles.icon}
      name={"filter"}
      onPress={changeScreen.bind(this, "filters")}
    />
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: Colors.textColor,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
    marginLeft: 30,
    marginVertical: 21
  },
  icon: {
    fontSize: 24,
    width: 27.57,
    height: 29,
    marginRight: 30,
    marginVertical: 21
  }
});

export default DrinksHeader;
