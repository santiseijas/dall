import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Detail(props) {
  console.log(props.route.params.item.url);
  return (
    <View style={styles.container}>
      <TouchableOpacity style>
        <Image
          style={styles.image}
          source={{ uri: props.route.params.item.url }}
          accessible={true}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    marginHorizontal: 200,
  },
  image: {
    height: 516,
    width: 516,
  },
});
