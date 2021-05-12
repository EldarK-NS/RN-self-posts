import React from 'react'
import { View, StyleSheet, Text, Image, Button, ScrollView, Alert } from 'react-native';
import { THEME } from './../theme';
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from './../store/actions/post';



export const PostScreen = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const { postId } = route.params
    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

    const removeHandler = () => {
        Alert.alert(
            "Deleting a post",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: 'Delete', style: 'destructive', onPress: () => {
                        navigation.navigate('My Blog')
                        dispatch(removePost(postId))
                    }
                }
            ],
            { cancelable: false }
        )
    }
    if (!post) {
        return null
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
        height: 250,
        marginTop: 15
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})
