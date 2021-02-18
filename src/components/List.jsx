

const List = ({student}) => {
    return(
        <>
        {student.map((eleve)=>{
            const {id, name, attendance} = eleve;
            console.log({id, name, attendance});

            return (
                
                <article className="student" key={id}>
                    <div className="display">
                        <h4>  {name} : </h4>
                        <p> {attendance ? 'Présent' : 'Absent'} </p>
                    </div>
                </article>
                   )
        })}
                
        </>
    )
}

export default List
