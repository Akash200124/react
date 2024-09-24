import React, { useCallback, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Button, Input, Select, RTE } from '../index'

import service, { Service } from "../../appwrite/config";
import { Form, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



function  PostForm({ post }) {


    const { register, handleSubmit, watch, setValue, control, getValues, textarea } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    });

    const navigate = useNavigate();
    // const userData = useSelector(state => state.userData)
    const userData = useSelector(state => state.auth.userData);

    console.log(userData?.payload?.userData?.$id, 'userdata')

   
    const submit = async (data) => {
        console.log("button working");
        console.log(data, "data")

        // Handle updating an existing post
        if (post) {
            // Upload new image file if provided
            const file = data.image[0] ? await service.fileUpload(data.image[0]) : null;

            // If a new file is uploaded, delete the old one
            if (file) {
                await service.deletFile(post.featureImage);
            }

            // Update the post with new data, including the new image ID if available
            const dbpost = await service.updatePost(post.$id, {
                ...data,
                featureImage: file ? file.$id : post.featureImage,  // Use the new file ID if uploaded, otherwise keep the existing one
            });

            // If the post is updated, navigate to the updated post page
            if (dbpost) {
                navigate(`/post/${dbpost.$id}`);
            }
        }

        // Handle creating a new post
        else {
            // Upload the image file
            const file = await service.fileUpload(data.image[0]);

            if (file) {
                // Add the uploaded file ID to the post data
                data.featureImage = file.$id;
                data.userId = userData?.payload?.userData?.$id

                // Create the new post with the uploaded file and user ID
                const dbpost = await service.createPost({
                    ...data,
                    // userId: userData?.payload?.userData?.$id
                });

                // If the post is created, navigate to the new post page
                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
                .trim()
                .toLowerCase()
                // Replacing only valid characters, but not at the beginning
                .replace(/[^a-zA-Z\d\s]+/g, '')
                // Replace spaces with dashes
                .replace(/\s+/g, '-')
                // Ensure no leading dashes
                .replace(/^-+/, '');

        } else return ''
    }, [])

    useEffect(() => {

        const subscription = watch((value, { name }) => {

            if (name === 'title') {
            }
        })

        return () => {
            subscription.unsubscribe();
        }


    }, [watch, slugTransform, setValue])

    // const filePReviewUrl = service.getFilePreview(post.featuredImage);
    // console.log(filePReviewUrl, "filePReviewUrl")
    console.log(post, "postdfddfdf")
   


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">

                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />


                <Controller
                    control={control}
                    name="content"
                    defaultValue={post?.content || ""}
                    rules={{
                        required: true,
                        maxLength: 255
                    }}
                    render={({ field }) => (
                        <textarea
                            style={{ height: '500px', width: '100%' }}
                            placeholder="Enter your content here.."
                            {...field} // Spread the field props to bind it properly
                        />
                    )}
                />
                {/* <textarea
                    style={{ height: '500px', width: '100%' }} placeholder="  Enter your content here.. "
                    label="Content :" name="content" control={control} defaultValue={getValues("content")} id=""></textarea>
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} /> */}
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featureImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />

                <button
                    type="submit"
                    className={`${post ? "bg-green-500" : "undefined"} w-full px-4 py-2 rounded-lg bg-blue-600 text-white`}
                >{post ? "Update" : "Submit"}</button>
                {/* <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button> */}
            </div>
        </form>
    )
}


export default PostForm