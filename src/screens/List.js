import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useStore } from "react-redux";

export default function List(props) {
  const store = useStore();
  const renderImages = (data) => {
    return (
      <TouchableOpacity onPress={()=>{
         props.navigation.push('Detail',data)
      }}>
        <Image style={styles.image} source={{ uri: data.item.url }} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {store.getState().generateData && (
        <FlatList
          data={store.getState().generateData}
          renderItem={(data) => renderImages(data)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width / 2.3,
    height: 200,
    margin: 2,
  },
});
