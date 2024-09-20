import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/config'
import { Container, postForm } from "../components";
import PostCard from '../components/PostCard';

function AllPost() {

    const [post, setPost] = useState([]);


    // console.log(post,"post")

    useEffect(() => {

        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPost(posts.documents)
                
                
            }
        })
    }, [])

   
    return (

        <div className="w-full py-8">

            <Container>
                <div className="flex flex-wrap ">
                    {
                        post.map((item) => (
                            <div key={item.$id} className='p-2 w-1/4'>
                                <PostCard post={item} />
                            </div>
                        ))
                    }
                </div>

            </Container>
        </div>
    )
}


export default AllPost