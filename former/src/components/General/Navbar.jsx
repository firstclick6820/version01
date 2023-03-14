import React, {useState,  useEffect} from 'react'
import {
Container
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
    <NavWrapper>
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
    </NavWrapper>
  )
}

 
export default Navbar


const NavWrapper = styled(Container)({
  position:'fixed',
  zIndex: 10,
  top: '5%',
  left: '50%',
  width: '100%',
  height: 'auto',
  transform: 'translate(-50%)',
  minHeight: '10vh',
  backdropFilter: 'blur(30px)',

})



const CustomAppBar = styled('nav')({
    background:'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
    width:'100%',
    height: '100%',
    padding: '0.7rem 1.7rem',
    display: 'flex',
    justifyContent:'center',
    gap: '0.8rem',
    borderRadius: '3rem',
    backdropFilter: 'blur(10px)',
})






const NavButton = styled(Link)(({ to, activelink }) => ({
    background: "transparent",
    width: '50px',
    height: '50px',
    padding: "1rem",
    borderRadius: "50%",
    display: "flex",
    alignItems:'center',
    justifyContent:'center',
    cursor: "pointer",
    color: "#FCE4EC",
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;',
    fontSize: "1.1rem",
    transition: "all 0.3s ease-in-out",
    transform: 'scale(1)',
    "&:hover": {
      backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
      transform: 'scale(1.15)',
    },
    ...(to === activelink && {
      backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
     
    }),
  }));
