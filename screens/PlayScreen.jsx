//import liraries
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Audio } from 'expo-av';
// create a component

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function PlayScreen() {

    const [sound, setSound] = React.useState();

    const [show, setShow] = useState(true);


    async function playSound() {
        if (sound) {
            await sound.playAsync();
        } else {
            await Audio.setAudioModeAsync({
                staysActiveInBackground: true,
                shouldDuckAndroid: true
            });
            const { sound } = await Audio.Sound.createAsync(
                { uri: "https://laradiossl.online:10166/;" },
                {
                    shouldPlay: true,
                    staysActiveInBackground: true,
                    shouldDuckAndroid: true
                }
            );
            setSound(sound);
            await sound.playAsync();
        }
        setShow(false);
    }

    function pauseSound() {
        setShow(true);
        sound.stopAsync();
    }


    return (
        <TouchableOpacity style={styles.playBtnContainer}
            onPress={show ? playSound : pauseSound}>
            <MaterialIcons name={show ? "play-circle-outline" : "pause-circle-outline"} size={80} color="#c40a04" />
        </TouchableOpacity>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        width: width
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    playBtnContainer: {
        height: 100,
        alignItems: "center",
        padding: 10
    }
});
