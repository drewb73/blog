import React from "react";
import { useSelector } from "react-redux";
import Admin from "./Admin";
import Private from "./Private";
import Public from "./Public";


const Navbar = () => {
    //get user from store
    const state = useSelector(state => state.users)
    const {userAuth} = state
    const isAdmin = userAuth?.isAdmin
    
   
  return (
    <>
      {isAdmin ? <Admin /> : userAuth ? <Private /> : <Public />}
    </>
  );
};

export default Navbar;