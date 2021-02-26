import Formulaire from '../components/Formulaire'
import Post from '../components/Post'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const url = 'http://localhost:5000/api/v1/posts'

const Blog = () => {

    // const [messages, setMessages] = useState(data)
    const [myFetch, setMyFetch] = useState([])

    const fetchApi = async () =>{
        try{
            const response = await axios.get(url)
            setMyFetch(response.data);
            console.log(myFetch)
    
        } catch(error){
            console.log(error)
        }
    }
    useEffect(() =>{
        fetchApi()
      },[])

   
    return (
        <>
        <h1>PROGRESSION</h1>
        
        <div className="contentcard">
            <Post myFetch={myFetch}/>
            <Formulaire/>
        </div>
        </>
    )

}

export default Blog



