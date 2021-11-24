import React from "react";
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const InfoStack = createStackNavigator();

function InfoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>InfoScreen!</Text>
    </View>
  );
}

export default function InfoStackScreen() {
  return (
    <InfoStack.Navigator>
      <InfoStack.Screen name="Info" component={InfoScreen} />
      {/* other screens */}
    </InfoStack.Navigator>
  );
}
