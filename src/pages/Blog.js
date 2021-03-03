import Formulaire from '../components/Formulaire'
import Post from '../components/Post'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const url = 'http://localhost:3001/api/v1/posts'

const Blog = () => {

    // const [messages, setMessages] = useState(data)
    const [myFetch, setMyFetch] = useState([])

    // const uploa = document.querySelector('#maj');
    // maj.onclick = () =>{
    //    fetchApi()
    // }

   

    const fetchApi = async () =>{
        try{
            const response = await axios.get(url)
            setMyFetch(response.data);
            console.log(myFetch)
    
        } catch(error){
            console.log(error)
        }
    }

    const uploadData = () => {
        fetchApi();
    };

    useEffect(() =>{
        fetchApi()
      },[])

   
    return (
        <>
        <h1>PROGRESSION</h1>
        
        <div className="contentcard">
            <Post myFetch={myFetch}/>
            <Formulaire/>
            {/* <button className="button" onClick={() => window.location.uploadData(false)}>Affichez vos posts</button>
            <button id="maj" onclick={uploadData}> Mettre à jour</button> */}
        </div>
        </>
    )

}

export default Blog



