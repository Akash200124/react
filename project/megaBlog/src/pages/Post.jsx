import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from 'html-react-parser';

function Post() {
    const [post, setPost] = useState(null);
    const [url, setUrl] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    // console.log(userData?.payload?.userData?.$id, "userdataid");
    
    const isAuthor = post && userData ? post.userId === userData?.payload?.userData?.$id : false;

    console.log(isAuthor, "isAuthor");
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((res) => {

                if (res) {
                    setPost(res)
                    console.log(res, "post")
                    setUrl(appwriteService.getFilePreview(res.featureImage));
                }
                else {
                    navigate("/");
                }
            });
        } else navigate("/");
    }, [slug, navigate]);

    // useEffect(() => {
    //     if (post) {
    //         console.log(post, "post after update");
    //     }
    // }, [post]); 
    console.log(post, "post11")

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deletFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    // console.log(post.featureImage ,"image")
   
    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {post && (
                        <img
                            src={url}
                            alt={post.title}
                            className="rounded-xl"
                        />
                    )}

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                            <button type="button" className=" bg-green-500 mr-3 p-2 rounded-md" >Edit</button>
                             
                            </Link>
                            <button type="button" className="bg-red-500  mr-3 p-2 rounded-md" onClick={deletePost}>Delete</button>
                            
                        </div>
                    )}
                </div>

                <div className="w-full mb-8">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>

                <div className="browser-css">{parse(post.content)}</div>
            </Container>
        </div>
    ) : null;
}

export default Post;
