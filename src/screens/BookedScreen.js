import React, { useEffect } from 'react'
import { PostList } from './../components/PostList';
import { loadPosts } from './../store/actions/post';
import { useDispatch, useSelector } from 'react-redux'


export const BookedScreen = ({ navigation }) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: new Date(post.date).toLocaleDateString(),
            booked: post.booked
        })
    }
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(loadPosts())
    }, [dispatch])

    const bookedPosts=useSelector(state=>state.post.bookedPosts)

    return <PostList data={bookedPosts} onOpen={openPostHandler} />

}



