import React, {useState, useEffect, useRef} from 'react'
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    const [content, setContent] = useState("");
    const [mail, setMail] = useState({});
    const [submit,setSubmit] = useState(false);

    const serviceID = 'service_xxlnthp';
    const templateID = 'template_rk85uwx';


    const mailer = emailjs.init("user_sCPg4iCrwEZ5svG3J3hX1");
    // Est ce que je viens de démarrer react? 
    const isInitialMount = useRef(true);
    
    const sendMail = async ()=> {

        try {
            const mailSent = await emailjs.send(serviceID, templateID, mail);

            console.log(mailSent)

        } catch (error) {
            console.log(error)
            
        }
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            setSubmit(true);
            setMail({
                ...{name},
                ...{contact},
                ...{content},
            });
        }

        
    useEffect(() => {
       if(isInitialMount.current){
           isInitialMount.current = false
       }
       else{
           console.log(mail)
           mail && sendMail(); //si mail est true alors execute sendMail
       }
    }, [submit])


    if(submit){
        return(
            <>
            <div>votre message a bien été envoyé</div>
            <Link to="/projets"> Retour aux posts</Link>
            </>
        )
    
    }else{

        return (
       
            <div>
               <h1> Contactez moi</h1>
            <form className="post-form" onSubmit={handleSubmit}>
                <label htmlFor="post-title">Nom </label>
                <input type="text" name="post-title" id="post-title" value={name} onChange={(e)=>setName(e.target.value)}/>
    
                <label htmlFor="post-tags">Contact </label>
                <input type="text" name="post-tags" id="post-tags" value={contact} onChange={(e)=>{
                    let newTags = e.target.value.toLowerCase().split(',');
                    setContact(newTags);
                }}/>
    
                <label htmlFor="post-content">Contenu : </label>
                <textarea name="post-content" id="post-content" cols="30" rows="10" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
    
                <input type="submit" value="Créer mon post"/>
    
               
            </form>
            </div>
        )
        
    }
    

    // return (
    //     <div>
    //         <form>
    //             <label htmlFor="Name">Nom</label>
    //             <div className="boxinput">
    //             <input type="text" id="Name" name="Name"/>
    //             </div>
    //             <label htmlFor="Email">Email</label>
    //             <div className="boxinput">
    //             <input type="text" id="Objet" name="Objet"/>
    //             </div>
    //             <label htmlFor="Objet">Objet</label>
    //             <div className="boxinput">
    //             <input type="text" id="Objet" name="Objet"/>
    //             </div>

    //         </form>

    
    //     </div>
    // )
}

export default Contact
