import {useEffect, useState} from 'react';
import Axios from 'axios';

const ViewList = () =>{
  const[userDeatils,setUserDetails] = useState("");

  

  const getListform = ()  => {
    Axios.get("https://crudcrud.com/api/14d38ff7dd034e79a21dfac79856e9b7/id").then(
      (response) =>{
        // console.log("axios getting",response.data);
        setUserDetails(response.data)
        console.log("axios getting",response.data)
      }
    )

  }

  useEffect (() =>{
    // getListform();
  },[]);

  return(
    <div>
         <p>First name: <input type="text" name="firstname" value="Deepa"/></p>
          <p>Last name: <input type="text" name="lastname"/></p>
      </div>
      )}

export default ViewList;