import React, { useState, useEffect } from "react";
import { Container } from "../components";
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/post-form/PostForm";

function EditPost() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((item) => {
                if (item) {
                    console.log(item , "ITEMPOST")
                    const post = item ;
                    post.slug = slug;
                    setPost(post)
                }
            })
        } else {
            navigate('/');
        }

    }, [slug, navigate])
    
    console.log(post, "post11111")

    return  post ? (
        <div className="py-8">
            <Container>
                <PostForm post ={post}/>
            </Container>
        </div>
    ): null;
   
}

export default EditPost