import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator
} from "react-native";

import FilterItem from "../components/FilterItem";
const uuid = require("uuid/v1");

const FiltersList = ({ onCheckFilter, setCheckFilters, checkFilters }) => {
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  if (checkFilters.length == 0) {
    useEffect(() => {
      setLoading(true);

      fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(res => res.json())
        .then(res => {
          setFilters(
            res.drinks.map(filter => ({
              id: uuid(),
              strCategory: filter.strCategory
            }))
          );
          setCheckFilters(res.drinks.map(filter => filter.strCategory));
          setLoading(false);
        });
    }, []);
  } else {
    useEffect(() => {
      setLoading(true);

      fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(res => res.json())
        .then(res => {
          setFilters(
            res.drinks.map(filter => ({
              id: uuid(),
              strCategory: filter.strCategory
            }))
          );
          setLoading(false);
        });
    }, []);
  }
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={80} style={styles.loading} />
      ) : (
        <FlatList
          data={filters}
          renderItem={({ item }) => (
            <FilterItem
              onCheckFilter={onCheckFilter}
              checkFilters={checkFilters}
              {...item}
            />
          )}
          style={styles.fltersList}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fltersList: {
    marginLeft: 20,
    marginTop: 20
  },
  loading: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

export default FiltersList;
