import React ,{useState} from 'react';
import { db } from '../firebase';



    
  
      const Contact =()=> {
    const [name,SetName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection('comments').add({
            comments:name
        })
        .then(()=>{
            alert("comment submitted");
        })
        .catch( error=>{
            alert("unsucessful submission");
        })

        SetName('');
    };

    return(
      <div>
        <center>
            <textarea value={name} onChange={(e)=>SetName(e.target.value)}></textarea>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        
        </center>
      </div>
    );
    }

export default Contact;