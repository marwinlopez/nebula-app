
import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from "./TabNavigator";

const RootStack = createStackNavigator();
function LogoTitle() {
    return (
        <Image
            style={{ width: 180, height: 50 }}
            source={{ uri: "https://buenisima.com.ve/img/logo_3d_png.png" }}
        />
    );
}

const DetailsStack = createStackNavigator();
function DetailsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Detalle de Aplicación!</Text>
        </View>
    );
}
// function DetailsStackScreen() {
//     return (
//         <DetailsStack.Navigator>
//             <DetailsStack.Screen name="Info" component={DetailsScreen} />
//             {/* other screens */}
//         </DetailsStack.Navigator>
//     );
// }
function ButtonHeader() {

    const navigation = useNavigation();
    return (
        <Text style={{ marginRight: 10 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Details")}>
                <MaterialCommunityIcons name="dots-vertical" size={20} />
            </TouchableOpacity>
        </Text>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Home"
                    options={{
                        headerTitle: props => <LogoTitle {...props} />,
                        headerRight: () => (
                            <ButtonHeader />
                        ),
                    }} component={TabNavigator} />
                <RootStack.Screen
                    name="Details"
                    component={DetailsScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}
