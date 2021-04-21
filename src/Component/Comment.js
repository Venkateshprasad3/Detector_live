import React ,{useState} from 'react';
import { db } from '../firebase';



    
  
    const Contact =()=> {
    const [name,SetName]=useState("");
    

const getGeoLocationDetails= ()=>{
    fetch( "https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => { 
        db.collection('comments').add({
            ip:data.ip,
            comments:name
        })
        .then(()=>{
            alert("comment submitted");
        })
        .catch( error=>{
            alert("unsucessful submission");
        });
     });


   /* */

    SetName('');
    }


  
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     getGeoLocationDetails();
   
    // //       console.log(ipa);



        
    // };

    return(
      <div>
        <center>
            <textarea value={name} onChange={(e)=>SetName(e.target.value)}></textarea>
            <br/>
            
            <button onClick={getGeoLocationDetails}>Submit</button>
        
        </center>
      </div>
    );
    }

export default Contact;