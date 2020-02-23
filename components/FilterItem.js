import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/colors";

const FilterItem = ({ strCategory, onCheckFilter, checkFilters }) => {
  const [check, setCheck] = useState(true);

  const onCheckHandler = () => {
    setCheck(!check);
    onCheckFilter(strCategory);
  };
  return (
    <TouchableWithoutFeedback onPress={onCheckHandler}>
      <View style={styles.item}>
        <Text style={styles.title}>{strCategory}</Text>
        {checkFilters.indexOf(strCategory) != -1 ? (
          <FontAwesome style={styles.icon} name={"check"} />
        ) : (
          <View></View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 62
  },
  title: { color: Colors.textColor, fontSize: 16 },
  icon: {
    fontSize: 16,
    marginRight: 35
  }
});

export default FilterItem;
