import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import Colors from "../constants/colors";
import CocktailItem from "../components/CocktailItem";
const CocktailCategorie = ({ drinks, categorie }) => {
  return (
    <SafeAreaView style={styles.categorie}>
      <Text style={styles.title}>{categorie}</Text>
      <FlatList
        data={drinks}
        renderItem={({ item }) => <CocktailItem {...item} />}
        keyExtractor={drink => drink.idDrink}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categorie: {
    marginLeft: 21
  },

  title: {
    marginVertical: 20,
    color: Colors.textColor
  }
});

export default CocktailCategorie;
