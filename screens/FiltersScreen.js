import React from "react";
import { View, StyleSheet } from "react-native";

import FiltersHeader from "../components/FiltersHeader";
import FiltersList from "../components/FiltersList";

const FilterScreen = ({
  changeScreen,
  onCheckFilter,
  setCheckFilters,
  checkFilters
}) => (
  <View style={styles.screen}>
    <FiltersHeader changeScreen={changeScreen} />
    <FiltersList
      onCheckFilter={onCheckFilter}
      setCheckFilters={setCheckFilters}
      checkFilters={checkFilters}
    />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
export default FilterScreen;
