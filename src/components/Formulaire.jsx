import React, { useState, useEffect } from 'react'


const Blog = () => {
    
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [tags,setTags] = useState([]);
    const [submit,setSubmit] = useState(false);
    const [post,setPost] = useState([]);


    useEffect(() => {
        console.log(post)

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