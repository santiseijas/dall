import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers";
import { Main } from "./src/screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./src/screens/List";
import Detail from "./src/screens/Detail";

export const initialState = {
  data: {},
};

const Stack = createNativeStackNavigator();

export default function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false,
              title: "",
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false,
              title: "",
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              headerShadowVisible: false,
              headerBackTitleVisible: false,
              headerBackVisible: false,
              title: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
