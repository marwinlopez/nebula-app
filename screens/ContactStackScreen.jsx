import React from "react";
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const ContactStack = createStackNavigator();

function ContactScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Contactanos!</Text>
        </View>
    );
}

export default function ContactStackScreen({ navigation }) {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
            // Prevent default behavior
            //   e.preventDefault();
            console.info('Default behavior prevented');
            // Do something manually
            // ...
        });

        return unsubscribe;
    }, [navigation]);
    return (
        <ContactStack.Navigator>
            <ContactStack.Screen name="Contactanos" component={ContactScreen} />
            {/* other screens */}
        </ContactStack.Navigator>
    );
}
