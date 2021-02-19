
import React, { useState } from 'react';
import List from '../components/List';
import data from '../data';


const Projets = () => {
    const [student, setStudent] = useState(data);
    return (
        <>
            <h1>Projets</h1>
            <div className="card">
            <List student={student}/>
            <button className="btn" onClick={() => setStudent ([])}>Refresh</button>
            </div>
            <div className="card"></div>
        </>
    )
}

export default Projets
