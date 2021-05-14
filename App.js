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
      <View style={styles.menupoints}>
        <Text style={styles.menuHeaderText}>Home</Text>
      </View>
      <View style={styles.menupoints}>
        <Text style={styles.menuHeaderText}>Price</Text>
      </View>
      <View style={styles.menupoints}>
        <Text style={styles.menuHeaderText}>About</Text>
      </View>
      <View style={{ flex: 5, backgroundColor: "#d2c1b5" }} />
      <View style={styles.menupoints}>
        <Text style={styles.menuHeaderText}>Contact</Text>
      </View>
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
    backgroundColor: "#614b3e",
    alignItems: "center",
    justifyContent: "center",
  },
  menuHeaderText: {
    fontSize: 20,
    color: "white",
  },
  menupoints: {
    flex: 1,
    backgroundColor: "#8c7b73",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
