import React, { useState, useEffect } from 'react'
import {useRouteMatch} from 'react-router-dom'
import axios from 'axios'


const apiUrl = 'http://localhost:3001/api/v1/posts'

const Single = () => {
    const [single, setSingle] = useState ({});
    const match = useRouteMatch();


    const getSingle = async () =>{
        const res = await axios.get(`${apiUrl}/${match.params.title}`);
        setSingle(res.data);
        console.log(res.data);

    }
  
    useEffect(() =>{
        getSingle();
        
    },[])

    return (

        <div>

            <h1>PAGE SINGLE</h1>
             <article className="single">
                    <div className="card"> 
                        {/* <h2>{post.title}</h2>
                        <p>{post.content.substring(0,50)}</p>
                        <p>{post.tags}</p> */}
                    </div>
             </article> 

        </div>
    )
}

export default Single
