import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useCurrencies } from "./hooks/useCurrencies";

export const CurrenciesScreen = () => {
  const { isLoading, isError } = useCurrencies();

  if (isLoading) {
    return <Text testID="loading">Loading...</Text>;
  }

  if (isError) {
    return <Text testID="error">Error fetching data</Text>;
  }

  return (
    <View>
      <Text>Currencies should be listed below</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
