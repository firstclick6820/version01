import React, {useState,  useEffect} from 'react'
import {
 
}
from '@mui/material'
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';




// Import Icons
import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const Navbar = () => {

  const [activeNav, setActiveNav] = useState(() => {
    return window.localStorage.getItem("activeNav") || "/";
  });


  const handleClick = (navLink) => {
    setActiveNav(navLink);
    window.localStorage.setItem("activeNav", navLink);
  };



  return (
    <CustomAppBar>
        <NavButton to="/" activelink={activeNav} onClick={() => handleClick("/")}>
            <HomeIcon />
        </NavButton>

        <NavButton to="/work-experiences" activelink={activeNav} onClick={() => handleClick("/work-experiences")}>
            <WorkHistoryIcon />
        </NavButton>

        <NavButton to="/certificates" activelink={activeNav} onClick={() => handleClick("/certificates")}>
            <WorkspacePremiumIcon />
        </NavButton>

        <NavButton to="/certifications" activelink={activeNav} onClick={() => handleClick("/certifications")}>
            <CardMembershipIcon />
        </NavButton>


    </CustomAppBar>
  )
}

 
export default Navbar



const CustomAppBar = styled('nav')({
    background:'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
    width:'max-content',
    minWidth: '30%',
    height: '10vh',
    padding: '0.7rem 1.7rem',
    position: 'fixed',
    zIndex: 10,
    left: '50%',
    top: '5%',
    transform: 'translate(-50%)',
    bottom: '2rem',
    display: 'flex',
    justifyContent:'center',
    gap: '0.8rem',
    borderRadius: '3rem',
    backdropFilter: 'blur(15px)',
})






const NavButton = styled(Link)(({ to, activelink }) => ({
    background: "transparent",
    
    padding: "0.9rem",
    borderRadius: "50%",
    display: "flex",
    cursor: "pointer",
    color: "#FCE4EC",
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
    fontSize: "1.1rem",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
      scale: "1.1",
    },
    ...(to === activelink && {
      backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
     
    }),
  }));
