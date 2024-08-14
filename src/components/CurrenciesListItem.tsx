import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Currency } from "../types";

interface ICurrenciesListItemProps {
  item: Currency;
}

export const CurrenciesListItem: React.FC<ICurrenciesListItemProps> = ({
  item,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.code}</Text>
      <Text style={styles.text}>
        {item.supportsTestMode ? "true" : "false"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    width: 150,
    fontSize: 16,
    textAlign: "center",
  },
});

export default CurrenciesListItem;
