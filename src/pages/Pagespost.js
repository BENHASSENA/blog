{/* page qui affiche les infos d'1 seul post */}

import React from 'react'

const Pagespost = () => {
    return (
        <div>
           <article className="messages" key={id}>
                <div className="card"> 
                    <h2>{titlepost}</h2>
                    <p>{contentpost}</p>
                    <p>{tagspost}</p>
                </div>
            </article>      
        </div>
    )
}

export default Pagespost

