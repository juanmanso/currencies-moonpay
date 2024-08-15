import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CurrenciesListHeader, CurrenciesListItem } from "./components";
import { useCurrencies } from "./hooks/useCurrencies";

export const CurrenciesScreen = () => {
  const { data, isLoading, isError } = useCurrencies();

  if (isLoading) {
    return <Text testID="loading">Loading...</Text>;
  }

  if (isError) {
    return <Text testID="error">Error fetching data</Text>;
  }

  return (
    <View testID="container">
      <Text>Currencies should be listed below</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CurrenciesListItem item={item} />}
        keyExtractor={(item) => item.code}
        ListHeaderComponent={<CurrenciesListHeader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
