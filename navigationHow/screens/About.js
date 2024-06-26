import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const About = ({ route, navigation }) => {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>I Am About Screen</Text>
      <Text style={styles.text}> Welcome {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 16,
  },
});

export default About;
