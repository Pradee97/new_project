// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import './style.css';
import { useNavigate } from "react-router-dom";
import Header from './Header';

const UserList = () => {
  const[userList,setUseList] = useState("");
  const navigate  = useNavigate ();

  const getListform = ()  => {
    Axios.get("https://crudcrud.com/api/26f61943ecc745c8a64ea64bb7c29248/unicorns").then(
      (response) =>{
        // console.log("axios getting",response.data);
        setUseList(response.data)
        console.log("axios getting",response.data)
      }
    )

  }


   useEffect(() => {
    getListform();
  }, []);

  function onHandleEdit(item) {
    navigate({
        pathname: "/userView",
        state: { id: item._id}
    });
}

  return (
  

    <div class="content">
    {/* <h1>HTML Layout using Tables</h1> */}
    
        <table>
  <thead>
    <tr>
      <th >Id #</th>
      <th >Name</th>
      <th >Age</th>
      <th >Colour</th>
      <th>Action</th>
    </tr>
  </thead>
  <tr>

   
      </tr>
  {userList?.length > 0 ? userList.map((item, index) =>
    <tr>
    <td>{item._id.slice(21)}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.colour}</td>
      <td>
        <button onClick={onHandleEdit(item)}>View</button>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
      
  ):""} 
  
    </table> 
   
    </div>
   );
}

export default UserList;
