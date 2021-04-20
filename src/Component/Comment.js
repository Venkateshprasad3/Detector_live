import React ,{useState} from 'react';
import { db } from '../firebase';



    
  
      const Contact =()=> {

    const [details,setDetails]=useState("");
   
// 
  
//     alert(details.IPv4);

// }
const getGeoLocationDetails= ()=>{
    fetch( "https://api.ipify.org/?format=json")
    .then(response =>response.json())
    .then(data=>setDetails(data))
  //  console.log(details.ip)
    }


    const [name,SetName]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        getGeoLocationDetails();
   
      
    var ipa=details.ip;
    //       console.log(ipa);



        db.collection('comments').add({
            ip:ipa,
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