import React, { useState, useRef } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { THEME } from './../theme';
import { addPost } from '../store/actions/post'
import { useDispatch } from 'react-redux';
import PhotoPicker from '../components/PhotoPicker';


export const CreateScreen = ({ navigation }) => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const imageRef = useRef()



    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: imageRef.current,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('My Blog')
    }

    const photoPickHandler = uri => {
        imageRef.current = uri
    }

    return (
        <ScrollView >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Create a New Post</Text>
                    <TextInput
                        style={styles.textarea}
                        placeholder='Enter text'
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button
                        title='Create post'
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!text || !imageRef.current}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textarea: {
        padding: 10,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 15
    }
})
