import React from "react";
import { View, StyleSheet } from "react-native";

import DrinksHeader from "../components/DrinksHeader";
import CocktailCategoriesList from "../components/CocktailCategoriesList";

const DrinksScreen = ({ changeScreen, checkFilters }) => (
  <View style={styles.screen}>
    <DrinksHeader changeScreen={changeScreen} />
    <CocktailCategoriesList checkFilters={checkFilters} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default DrinksScreen;
