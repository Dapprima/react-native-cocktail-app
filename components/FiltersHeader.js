import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/colors";

const DrinksHeader = ({ changeScreen }) => (
  <View style={styles.header}>
    <FontAwesome
      style={styles.icon}
      name={"arrow-left"}
      onPress={changeScreen.bind(this, "drinks")}
    />
    <Text style={styles.title}>Filters</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    justifyContent: "flex-start",
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
    marginLeft: 40,
    marginVertical: 21
  },
  icon: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 23.46,
    marginBottom: 22.46,
    width: 29,
    height: 24.09
  }
});

export default DrinksHeader;
