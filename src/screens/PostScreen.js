import React from 'react'
import { View, StyleSheet, Text, Image, Button, ScrollView, Alert } from 'react-native';
import { DATA } from './../data';
import { THEME } from './../theme';


export const PostScreen = ({ navigation, route }) => {
    const { postId } = route.params
    const post = DATA.find(p => p.id === postId)

    const removeHandler = () => {
        Alert.alert(
            "Deleting a post",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                { text: 'Delete', style: 'destructive', onPress: () => { } }
            ],
            { cancelable: false }
        )
    }

    return (
        <ScrollView >
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title='delete' color={THEME.DANGER_COLOR} onPress={removeHandler} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})
