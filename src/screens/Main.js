import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { generateImage } from "../api";
import { useStore } from "react-redux";
import { actionTypes } from "../redux/actions/actionsTypes";

export const Main = (props) => {
  const store = useStore();
  const [loading, setLoading] = useState(false);
   const [input, setInput] = useState('')

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
         onChangeText={(value)=>{
            setInput(value)
         }}
      >

      </TextInput>
      {!loading ? (
        <TouchableOpacity
          onPress={async () => {
            setLoading(true);
            const images = await generateImage(input);
            store.dispatch({ type: actionTypes.GENERATE_DATA, images });

            props.navigation.push("List",);
            setLoading(false);
          }}
        >
          <Text>Generar</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator />
      )}

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
   height: 'auto',
   width: Dimensions.get('window').width-100,
   margin: 24,
   borderWidth: 0.8,
   borderRadius: 5,
   borderColor: '#497FDF',
   padding: 24,
   paddingTop: 24,
  }
});
