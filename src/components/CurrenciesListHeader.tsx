import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ICurrenciesListHeaderProps {
  onNamePress?: () => void;
  onCodePress?: () => void;
}

export const CurrenciesListHeader: React.FC<ICurrenciesListHeaderProps> = ({
  onNamePress,
  onCodePress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onNamePress?.()}>
        <Text style={styles.headerText}>Name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onCodePress?.()}>
        <Text style={styles.headerText}>Code</Text>
      </TouchableOpacity>
      <Text style={[styles.button, styles.headerText]}>Supports Testmode</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: 100,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CurrenciesListHeader;
