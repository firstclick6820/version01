import React from 'react'
import {
    Button,
    Box,
    Tooltip,
}
from '@mui/material'

import { styled } from '@mui/material/styles';


// import icons

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const links = {
  facebook: 'https://www.facebook.com/mohkhalidmomand',
  twitter: 'https://twitter.com/MkmMomand',
  github: 'https://github.com/firstclick6820',
  linkedin: 'https://www.linkedin.com/in/khalidmomand/',
  instagram: 'https://www.instagram.com/momand.khalid/',
  youtube: 'https://www.youtube.com/@mkm-vibes'
}



const index = () => {
  return (
    <WrapperContianer>

        <SingleNavLink href={links.facebook}>
          <Tooltip title="Facebook" placement="top" arrow><FacebookIcon /></Tooltip>
        </SingleNavLink>

        <SingleNavLink href={links.twitter}>
          <Tooltip title="Twitter" placement="top" arrow><TwitterIcon /></Tooltip>
        </SingleNavLink>

        <SingleNavLink href={links.github}>
          <Tooltip title="Github" placement="top" arrow><GitHubIcon /></Tooltip>
        </SingleNavLink>


        <SingleNavLink href={links.linkedin}>
          <Tooltip title="LinkedIn" placement="top" arrow><LinkedInIcon /></Tooltip>
        </SingleNavLink>

        <SingleNavLink href={links.instagram}>
          <Tooltip title="Instagram" placement="top" arrow><InstagramIcon /></Tooltip>
        </SingleNavLink>


        <SingleNavLink href={links.youtube}>
          <Tooltip title="Youtub" placement="top" arrow><YouTubeIcon /></Tooltip>
        </SingleNavLink>
    </WrapperContianer>
  )
}

export default index



// Wrapper Container
const WrapperContianer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'0.8em',


})



// Single Nav Link Customization
const SingleNavLink = styled(Button)({
  '&:before':{
    content: "''",
    transition:'all 0.3s ease-in-out',
    boxShadow: 'linear-gradient(120deg,transparent,rgba(237, 33, 58, 0.4),transparent)',
  },
    color: '#FFEBEE',
    cursor: 'pointer',
    minWidth: '45px',
    padding: '1em',
    boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`,
    backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
    transition: 'all 0.3s ease-in-out',
    borderRadius: '50%',
    '&:hover': {
      scale: '1.28',
      boxShadow: '1px 1px 10px 6px rgba(237, 33, 58, 0.4)',
    }
})