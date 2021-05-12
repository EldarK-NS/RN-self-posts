import React, { useEffect } from 'react'
import { PostList } from './../components/PostList';
import { loadPosts } from './../store/actions/post';
import { useDispatch, useSelector } from 'react-redux'



export const MainScreen = ({ navigation }) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post', {
            postId: post.id,
            date: new Date(post.date).toLocaleDateString(),
            booked: post.booked
        })
    }
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)

    return <PostList data={allPosts} onOpen={openPostHandler} />
}


