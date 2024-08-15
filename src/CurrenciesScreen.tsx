import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Switch, Text, View } from "react-native";
import { CurrenciesListHeader, CurrenciesListItem } from "./components";
import { useCurrencies } from "./hooks/useCurrencies";
import { Currencies } from "./types";

export const CurrenciesScreen = () => {
  const { data, isLoading, isError } = useCurrencies();
  const [filteredData, setFilteredData] = useState<Currencies>([]);
  const [showTestMode, setShowTestMode] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "code">();

  const sortByName = () => setSortBy("name");
  const sortByCode = () => setSortBy("code");

  useEffect(() => {
    if (data) {
      if (showTestMode) {
        setFilteredData(data.filter((item) => item.supportsTestMode));
      } else {
        setFilteredData(data);
      }
    }
  }, [data, showTestMode]);

  useEffect(() => {
    if (sortBy) {
      setFilteredData((prevState) =>
        [...prevState].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
      );
    }
  }, [sortBy]);

  if (isLoading) {
    return <Text testID="loading">Loading...</Text>;
  }

  if (isError) {
    return <Text testID="error">Error fetching data</Text>;
  }

  return (
    <View testID="container">
      <View>
        <Text>Toggle test mode filtering</Text>
        <Switch
          testID="switchToggle"
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={showTestMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setShowTestMode}
          value={showTestMode}
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <CurrenciesListItem item={item} />}
        keyExtractor={(item) => item.code}
        ListHeaderComponent={() => (
          <CurrenciesListHeader
            onNamePress={sortByName}
            onCodePress={sortByCode}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
