import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post/Post';
import Layout from '../components/Layout';

export default function Home() {

    const [menuItem, setMenuItem] = useState(0);
    const [posts, setPosts] = useState([]);

    const onMenuChange = (value: any) => {
        console.log(value);
    }

    useEffect(() => {
        fetchPosts();

        return () => {
            setPosts([])
        }
    }, [])

    const fetchPosts = async () => {
        const postServiceRes = await axios.get('http://localhost:3001/api/v1/post/get-all');
        if (postServiceRes && postServiceRes.data && postServiceRes.data.validity) {
            setPosts(postServiceRes.data.result);
        }
    }

    return (
        <Fragment>
            <Layout>
                {
                    posts.map((post, i) => (
                        <Post key={i} post={post} />
                    ))
                }
            </Layout>
        </Fragment>
    )
}