import React, { useState,useEffect } from "react";
import appwriteSerive from '../appwrite/config'
import { Link } from 'react-router-dom'

// const PostCard = ({ post }) => {
//     // Use optional chaining or default values to prevent errors
//     const { $id = '', title = 'Untitled', featureimage = '' } = post || {};

function PostCard({ post } = {}) {

    const  { $id, title , featureImage } = post ;
    console.log("postid",$id);
    
    console.log("featureimage",featureImage)
    console.log("title",title)

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // Fetch the image preview only once when `featureimage` changes
        if (featureImage) {
            // console.log(appwriteSerive.getFilePreview(featureimage))
           const url =   appwriteSerive.getFilePreview(featureImage)
            setImageUrl(url);  // Set the preview URL in state
               
        }
    }, [featureImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={imageUrl} alt={title}
                        className="rounded-xl" />
                </div>


                <h2
                    className="text-xl font-bold"
                >{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard