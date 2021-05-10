import React from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import { Post } from '../components/Post';
import { DATA } from './../data';



export const MainScreen = ({ navigation }) => {
    const openPostHandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: new Date(post.date).toLocaleDateString(),
            booked: post.booked
        })
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
                keyExtractor={post => post.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})

