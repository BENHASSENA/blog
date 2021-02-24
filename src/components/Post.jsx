// page qui affiche tous les posts
const Post = ({messages}) => {
    return(
        <>

        {messages.map((post)=>{
            const {id, titlepost, contentpost, tagspost} = post;
            console.log( {id,titlepost, contentpost, tagspost});

            return (
                
                <article className="messages" key={id}>
                    <div className="card"> 
                        <h2>{titlepost}</h2>
                        <p>{contentpost.substring(0,50)}</p>
                        <p>{tagspost}</p>
                    </div>
                </article>             
                
            )
        })}
          
        </>
    )
}

export default Post