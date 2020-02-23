import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Import Screens
import DrinksScreen from "./screens/DrinksScreen";
import FiltersScreen from "./screens/FiltersScreen";

export default function App() {
  const [screen, setScreen] = useState("filters");
  const [checkFilters, setCheckFilters] = useState([]);

  const changeScreenHandler = name => {
    setScreen(name);
  };
  const checkFiltersHandler = filter => {
    let filters = [...checkFilters];
    if (filters.indexOf(filter) != -1) {
      filters.splice(filters.indexOf(filter), 1);
    } else {
      filters = [...filters, filter];
    }

    setCheckFilters(filters);
  };
  let content = "";
  if (screen == "drinks") {
    content = (
      <DrinksScreen
        changeScreen={changeScreenHandler}
        checkFilters={checkFilters}
      />
    );
  } else {
    content = (
      <FiltersScreen
        changeScreen={changeScreenHandler}
        onCheckFilter={checkFiltersHandler}
        setCheckFilters={setCheckFilters}
        checkFilters={checkFilters}
      />
    );
  }
  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
