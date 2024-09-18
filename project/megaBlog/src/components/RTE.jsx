import React from "react";
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from "react-hook-form";

function RTE({ name, control, label, defaultValue = "" }) {


    return (
        // <Editor
        //     initialValue="default value"
        //     init={
        //         {
        //             branding: false,
        //             height: 500,
        //             menubar: true,
        //             plugins: [
        //                 'advlist autolink lists link image charmap print preview anchor',
        //                 'searchreplace visualblocks code fullscreen',
        //                 'insertdatetime media table paste code help wordcount'
        //             ],
        //             toolbar: [
        //                 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bulllist numlist outdent indent| removeformat | help '
        //             ]
        //         }
        //     }
        // />

        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}

            <Controller
            name={name || "content"}
            control ={control}
            render ={({field:{onChange}})=>(
                <Editor
                initialValue={defaultValue}
                init={{
                    height :500 ,
                    menubar : true,
                    plugins:[
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar :"undo redo | blocks| image | bold italic forecolor |  alignleft aligncenter alignright alignjustify | bullist numlist outdent indent| removeformat | help ",
                    content_style:"body{ font-family:Helvetica Arial, sans-sarif; font-size:14px }"
                }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>

    )
}


export default RTE