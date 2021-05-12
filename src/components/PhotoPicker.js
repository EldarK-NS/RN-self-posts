// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform, StyleSheet, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';

// async function askForPermissions() {
//     const { status } = await Permissions.askAsync(
//         Permissions.CAMERA,
//         Permissions.CAMERA_ROLL
//     )
//     if (status !== 'granted') {
//         Alert.alert('Sorry, we need camera roll permissions to make this work!')
//         return false
//     }
//     return true
// }

// export const PhotoPicker = ({ }) => {
//     const [image, setImage] = useState(null)

//     const takePhoto = async () => {
//         const hasPermissions = await askForPermissions()
//         if (!hasPermissions) {
//             return
//         }
//         const image = await ImagePicker.launchCameraAsync({
//             quality: 0.7,
//             allowsEditing: false,
//             aspect: [16, 9]
//         })
//         console.log(image)
//     }
//     return (
//         <View style={styles.wrapper}>
//             <Button title='Make picture' onPress={takePhoto} />
//             {image && <Image source={{ uri: image }} style={styles.image} />}
//         </View>
//     )


// }

// const styles = StyleSheet.create({
//     wrapper: {
//         marginBottom: 10,
//     },
//     image: {
//         width: '100%',
//         width: 250,
//         marginTop: 10
//     }

// })

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoPicker({ onPick }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            onPick(result.uri)
        }
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}
