import { commonAPI } from "../services/commonAPI"
import {serverUrl} from "../services/serverUrl"


//upload a vedio
export const uploadVideo = async(reqBody)=>{
    //POST http request to server url "http://localhost:4000/videos" to add video to json server and return reponse to add.jsx
    return await commonAPI("POST", `${serverUrl}/videos`,reqBody)
}
//get all videos from json server
export const getAllVideo =async()=>{
    //make get "http://localhost:4000/videos" to get video to json server and view component 
    return await commonAPI("GET",`${serverUrl}/videos`,"")
}
//get a video from server
export const getAVideo =async(id)=>{
    //make get "http://localhost:4000/videos" to get  a video to json server and view component 
    return await commonAPI("GET",`${serverUrl}/videos/${id}`,"")
}
//get a video from server
export const deleteVideo =async(id)=>{
    //make get "http://localhost:4000/videos" to get  a video to json server and view component 
    return await commonAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}
//store watch history in json server
export const addToHistory = async(videoDetails)=>{
    //make POST http request to "http://localhost:4000/history" to add watchhistory to json server and return response to videoCard
    return await commonAPI("POST",`${serverUrl}/history`,videoDetails) 
} 
//get all watching video history
export const getAllHistory = async()=>{
    //make get http request to "http://localhost:4000/history" to get all videowatchhistory from json server to watchhistorry component
    return await commonAPI("GET",`${serverUrl}/history`,"")
}
//get all watching video history
export const deleteHistory = async(id)=>{
    //make delete http request to "http://localhost:4000/history" to delete videowatchhistory from json server to watchhistorry component
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})
}
export const addCategory = async (reqBody) => {
    // call POST http request to "localHost:4000/videos" to add category to json server and return response to category.jsx
    return await commonAPI("POST", `${serverUrl}/categories`, reqBody);
  };
  
  export const getCategory = async () => {
    // make GET  "localHost:4000/videos" to get all videos from json server to view component
    return await commonAPI("GET", `${serverUrl}/categories`, "");
  };
  
  export const deleteCategory = async (id) => {
    // make DELETE "localHost:4000/videos" to delete videos from json server
    return await commonAPI("DELETE", `${serverUrl}/categories/${id}`, {});
  };
  
  export const getAllCategory = async () => {
    // make GET  "localHost:4000/videos" to get all videos from json server to view component
    return await commonAPI("GET", `${serverUrl}/categories`, "");
  };
  
  // update category
  export const updateCategory = async (id, body) => {
    // make Update  "localHost:4000/videos" to get all videos from json server to view component
    return await commonAPI("PUT", `${serverUrl}/categories/${id}`, body);
  };