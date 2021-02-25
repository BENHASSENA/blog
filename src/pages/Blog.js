import Formulaire from '../components/Formulaire'
import Post from '../components/Post'
import data from '../data'
import React, { useState, useEffect } from 'react'


const url = 'http://localhost:3001/api/v1/posts'

const Blog = () => {

    const [messages, setMessages] = useState(data)
    const [myFetch, setMyFetch] = useState([])
    const fetchApi = async () =>{
        try{
            const response = await fetch(url)
            const myFetch = await response.json()
            setMyFetch(myFetch);
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



