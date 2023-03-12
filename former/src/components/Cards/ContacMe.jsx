import * as React from 'react';
import { 

Box,
Button,
Tooltip,
Typography


} from '@mui/material';

import Profile from './../../assets/images/profile.jpg'
import { styled } from '@mui/material/styles';

import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FaxIcon from '@mui/icons-material/Fax';



export default function ContactMeCard() {


  return (

    <ContentWrapper>
        <TopBox>
            <AvatarImage />
            <Username>KHALID</Username>
        </TopBox>

        <MiddleBox>
            <SingleNavLink href="mailto:mohammadkhalidmomand@gmail.com">
               <Tooltip title="Send Email" arrow placement="top"><AttachEmailIcon /></Tooltip>
            </SingleNavLink>

            <SingleNavLink href="https://wa.me/+971527546685">
              <Tooltip title="Whats Me" arrow placement="top"><WhatsAppIcon /></Tooltip>
            </SingleNavLink>

            <SingleNavLink href="tel:+971527546685">
              <Tooltip title="Call Me" arrow placement="top"><CallIcon /></Tooltip>
              
            </SingleNavLink>

            <SingleNavLink href="http://m.me/mohkhalidmomand/">
              <Tooltip title="Chat Me" arrow placement="top"><MessageIcon /></Tooltip>
            </SingleNavLink>
        </MiddleBox>

        <BottomBox>
            <DetailsBox>
              <Typography>
              Results-oriented and Energetic professional with 7 years of experience and proven knowledge of Cost Management, General Accountant, Business Administration, Production, and Business Operations.  Apart from my Professional career, I am a self-taught Python Developer, Web Developer, Digital Marketing specialist, and GUI designer.
              </Typography>
            </DetailsBox>
        </BottomBox>
    </ContentWrapper>
  );
}



const ContentWrapper = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap:'1.3rem',

  
})


// Top Box
const TopBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'column',
  alignItems:'center',
  gap: '0.5em'

})

// MiddleBox
const MiddleBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem'
})



// Bottom Box
const BottomBox = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
})



// Single Nav Link Customiztion || Middle Box Item
const SingleNavLink = styled(Button)({
  '&:before':{
    content: "''",
    transition:'all 0.3s ease-in-out',
    boxShadow: 'linear-gradient(120deg,transparent,rgba(125, 33, 58, 0.4),transparent)',
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



// User Image || top box item
const AvatarImage = styled(Box)({
  width: '100px',
  height: '100px',
  backgroundSize: '100% 100%',
  borderRadius: '50%',
  backgroundImage: `url(${Profile})`,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  transition: 'all 0.3s ease-in-out',
  cursor:'pointer',
  '&:hover': {
    scale: "1.1"
  }
})


const Username = styled(Typography)({
  fontWeight: 900,
  fontSize: '1.5rem',
  color: '#FFEBEE',
  opacity: 0.5
})




// Bottom Box Item
const DetailsBox = styled(Box)({
    borderRadius: '1rem',
    backgroundImage:'linear-gradient(to bottom, #ed213a, black)',
    boxShadow: 'rgba(237, 33, 58, 0.3) 0px 19px 38px, rgba(237, 33, 58, 0.22) 0px 15px 12px;',
    Width: '100%',
    minHeight: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
})