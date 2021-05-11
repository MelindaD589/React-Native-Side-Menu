import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SideMenu from "react-native-side-menu-updated";

const ContentView = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const Menu = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View style={styles.menuHeader}>
        <Text style={styles.menuHeaderText}>Menu</Text>
      </View>
      <View style={{ flex: 9, backgroundColor: "green" }} />
    </View>
  );
};

const App = () => {
  const menu = <Menu />;

  return (
    <SideMenu menu={menu}>
      <ContentView />
    </SideMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menuHeader: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  menuHeaderText: {
    fontSize: 20,
    color: "white",
  },
});

export default App;
