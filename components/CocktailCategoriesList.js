import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from "react-native";

import CocktailCategorie from "./CocktailCategorie";
const uuid = require("uuid/v1");

const CocktailList = ({ checkFilters }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    checkFilters.forEach(filter => {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`
      )
        .then(res => res.json())
        .then(res => {
          let drinks = categories;

          let newDrinks = {
            id: uuid(),
            categorie: filter,
            drinks: res.drinks
          };
          drinks.push(newDrinks);
          setCategories(drinks);
          setLoading(false);
        });
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={80} style={styles.loading} />
      ) : (
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CocktailCategorie
              drinks={item.drinks}
              categorie={item.categorie}
            />
          )}
          keyExtractor={categorie => categorie.id}
          initialNumToRender={10}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default CocktailList;
