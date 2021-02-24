import Formulaire from '../components/Formulaire'
import Post from '../components/Post'
import data from '../data'
import React, { useState } from 'react'



const Blog = () => {

    const [messages, setMessages] = useState(data)
    return (
        <>
        <h1>PROGRESSION</h1>
        
        <div className="contentcard">
        <Post messages={messages}/>
        <Formulaire/>
        
        </div>
        </>
    )
}


export default Blog



