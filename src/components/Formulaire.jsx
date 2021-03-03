import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Blog = () => {
    
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState([]);
    const [submit,setSubmit] = useState(false);
    const [post,setPost] = useState([]);
    

    function uploadData(){

        const postUrl = 'http://localhost:3001/api/v1/posts';
        axios.post(postUrl, post)
        .then(function(response){
        console.log(response);
        })

    }

    useEffect(() => {
        console.log(post)
        uploadData();
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setPost({
            ...{title},
            ...{content},
            ...{tags} 
        });
    }


    return (
        <div>
            Blog
        <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="post-title">Titre du post : </label>
            <input type="text" name="post-title" id="post-title" value={title} onChange={(e)=>setTitle(e.target.value)}/>

            <label htmlFor="post-content">Contenu : </label>
            <textarea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

            <label htmlFor="post-tags">Tags/Catégories </label>
            <input type="text" name="post-tags" id="post-tags" value={tags} onChange={(e)=>{
                let newTags = e.target.value.toLowerCase().split(',');
                setTags(newTags);
            }}/>
            <input type="submit" value="Créer mon post"/>

           
        </form>
        </div>
    )
}

export default Blog