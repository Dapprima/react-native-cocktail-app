import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/colors";

const CocktailItem = ({ strDrink, strDrinkThumb }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: strDrinkThumb }} />
      <Text style={styles.title}>{strDrink}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  image: { marginRight: 20, width: 100, height: 100 },
  title: { color: Colors.textColor }
});

export default CocktailItem;
