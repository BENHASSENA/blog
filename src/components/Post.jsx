// page qui affiche tous les posts
const Post = ({myFetch}) => {
    
    return(
        <>

        {myFetch.map((post)=>{
            const {id, title, content, tags} = post;

            return (
                
                <article className="messages" key={id}>
                    <div className="card"> 
                        <h2>{title}</h2>
                        <p>{content.substring(0,50)}</p>
                        <p>{tags}</p>
                    </div>
                </article>             
                
            )
        })}

        
          
        </>
    )
}



export default Post

