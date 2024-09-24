import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite"


export class Service {

    client = new Client();
    databases;
    bucket;
    

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteprojectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            console.log("title", title)
            // console.log("slug", slug)
            console.log("content", content)
            console.log("featureImage", featureImage)
            console.log("status", status)
            console.log("userId", userId)
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }
            )

        } catch (error) {
            console.log('error in the creating document: ', error)
        }
    }

    async updatePost(slug, { title, content, featureImage, status }) {

        try {
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                }
            )

        } catch (error) {
            console.log("error while updating the data : ", error);

        }


    }

    async deletePost(slug){

        try {
             await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("error while delete the post :", error);
            
            return false
        }

    }

    async getPost(slug){
        try {
            
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("error while getting the data: ", error);
            
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            // const userData = useSelector(state => state.auth.userData);

            // console.log(userData?.payload?.userData?.$id, 'userdata')

            // const userQuery = Query.equal("userId", userData?.payload?.userData?.$id);

            // const combinedQueries = [...queries, userQuery];
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
            )

        } catch (error) {
            console.log("error while getting the data : ", error);
            return false
        }
    }

    // file upload mthods 

    async fileUpload(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )

        } catch (error) {
            console.log("Error occur while uploading file :", error);
            return false;
        }
    }

    async deletFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("error occur while deleting the file :",error);
            return false
            
        }
    }

     getFilePreview(fileId){

        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId,
            

            console.log("filedId",fileId)
           
        )
    }
    
}

const service = new Service();

export default service;