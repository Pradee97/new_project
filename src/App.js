import React from "react";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import './style.css';
import UserList from "./UserList";
import ViewList from "./ViewList";
import Header from "./Header";
import Login from "./Login";

function App() {
  return (
<div>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Login/>} />

<Route path='/userList' element={<UserList/>} />
<Route path="/userView" element={ViewList}/>
<Route path="/header" element={Header}/>
{/* <Route path="/registration" element={<Registration />} />
<Route path="/dashboard" element={<Dashboard />} /> */}
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
