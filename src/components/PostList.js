import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Post } from './Post';

export const PostList = ({ data, onOpen }) => {

    if (!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>
                    No items
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
                keyExtractor={(post, index) => index.toString()}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 25
    }
})
