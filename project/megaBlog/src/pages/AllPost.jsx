import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/config'
import { Container, postForm } from "../components";
import PostCard from '../components/PostCard';

function AllPost() {

    const [post, setPost] = useState([]);


    // console.log(post,"post")

    useEffect(() => {

        appwriteService.getPosts([]).then((res) => {
            if (res) {
                               
                const document = res.documents;
                setPost(document);
            }
        })
    }, [])

   

   console.log(post, "res");
   
    
   
    return (

        <div className="w-full py-8">

            <Container>
                <div className="flex flex-wrap ">
                    {
                        post.map((item) => (
                            item ?(<div key={item.$id} className='p-2 w-1/4'>
                        
                                
                                <PostCard post={item} />
                            </div>) : null
                        ))
                    }
                </div>

            </Container>
        </div>
    )
}


export default AllPost