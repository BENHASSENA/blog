// page qui affiche tous les posts
import {Link} from 'react-router-dom'

const Post = ({myFetch}) => {

    return(
        <>

        {myFetch.map((post,index)=>{
            const {id, title, content, tags} = post;

            return (

               <Link to={`projets/${post.title}`}>
                <article className="messages" key={index}>
                    <div className="card"> 
                        <h2>{title}</h2>
                        <p>{content.substring(0,50)}</p>
                        <p>{tags}</p>
                    </div>
                </article> 
               </Link>
                
            )
        })}

        
          
        </>
    )
}



export default Post

