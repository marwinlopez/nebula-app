import React from "react";
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen!</Text>
    </View>
  );
}

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        options={{
          headerTitle: "Home Title",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
            fontFamily: 'sans-serif',
            fontSize: 25
          },
        }}
        component={HomeScreen} />
      {/* other screens */}
    </HomeStack.Navigator>
  );
}
