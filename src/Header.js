import React from "react";
// import logo from '../../accets/images/Abi.png'



const Header = () => {


    return (
      <div class="container-fluid bg-dark fixed-top ">
      <div class="navbar">
      <h1 class="cc"><i class="fa-regular fa-chess-bishop"></i>  BLACK SPRING</h1> 
      <button type="button" class="btn btn-danger"  /* onClick={() => navigate('/')} */>Logout</button>

      </div>
      </div>
    );
}
export default Header;