import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
});

type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

export default function Index() {
  const [count, setCount] = useState<number>(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "blue" }}>Hello Johannes och Marucs bajs!</Text>
      <Text style={{ color: "blue" }}>{count}!</Text>
      <Greeting name="Johannes" />
      <Greeting name="Christian" />
      <Greeting name="Marcus" />

      <Button title="Press me" onPress={() => setCount(count + 1)} />
    </View>
  );
}
