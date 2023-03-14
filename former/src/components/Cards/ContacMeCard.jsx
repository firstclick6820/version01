import * as React from 'react';
import { 

Box,
Button,
Tooltip,
Typography,
Container,
Grid


} from '@mui/material';

import Profile from './../../assets/images/profile.jpg'
import { styled } from '@mui/material/styles';

import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function ContactMeCard() {


  return (

    <WrapperContainer>
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

            <BottomBoxGrid container spacing={0}>
                <IconBox item sm={2} >
                    <LocationOnIcon  sx={{color: '#FFD740', fontWeight: 900, fontSize: '2em'}}/>
                </IconBox>

                <Grid item sm={10}>
                  <SingleRow>
                    <Title>Address</Title>
                    <SubTitle>101, Naimyia Tower, Ajman, UAE.</SubTitle>
                  </SingleRow>
                </Grid>
            </BottomBoxGrid>


            <BottomBoxGrid container spacing={0}>
                <IconBox item sm={2} >
                    <CallIcon  sx={{color: '#FFD740', fontWeight: 900, fontSize: '2em'}}/>
                </IconBox>

                <Grid item sm={10}>
                  <SingleRow>
                    <Title>Mobile</Title>
                    <SubTitle>+971-52754-6685 </SubTitle>
                  </SingleRow>
                </Grid>
            </BottomBoxGrid>


            

            <BottomBoxGrid container spacing={0}>
                <IconBox item  sm={2} >
                    <AttachEmailIcon  sx={{color: '#FFD740', fontWeight: 900, fontSize: '2em'}}/>
                </IconBox>

                <Grid item  sm={10}>
                  <SingleRow>
                    <Title>Email</Title>
                    <SubTitle>mohammadkhalidmomand@gmail.com</SubTitle>
                  </SingleRow>
                </Grid>
            </BottomBoxGrid>


            

            <BottomBoxGrid container spacing={0}>
                <IconBox item sm={2} >
                    <RssFeedIcon  sx={{color: '#FFD740', fontWeight: 900, fontSize: '2em'}}/>
                </IconBox>

                <Grid item sm={10}>
                  <SingleRow>
                    <Title>Website</Title>
                    <SubTitle>www.mkm-resume.onrender.com</SubTitle>
                  </SingleRow>
                </Grid>
            </BottomBoxGrid>

  
        </BottomBox>
    </WrapperContainer>
  );
}



const WrapperContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'space-between',
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
    alignItems: 'center',
    gap: '1rem'
})



// Bottom Box
const BottomBox = styled(Box)({
    cursor: "pointer",
    width: '100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'flex-start',
    gap: '0.5em',
   

})

const BottomBoxGrid = styled(Grid)({
  width: '100%',
  border: '1px solid orange',
  borderRadius: '0.5em',
  transition: 'all 0.3s ease-in-out',
  touchAction: 'manipulation',
  '&:hover': {
    border: '1px solid #FFEBEE'
  },
  backgroundImage: 'linear-gradient(to top, #ed213a, black)',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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
    transform: 'scale(1)',
    borderRadius: '50%',
    '&:hover': {
      transform: 'scale(1.28)',
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





const IconBox = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
})


const SingleRow = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  borderRadius: '0.2em',
  padding: '0.5em',
  touchAction: 'manipulation',
  '&:hover': {
    transform: "scale(1.02)"
  }

})

const Title = styled(Typography)({
  fontWeight: 900,
  fontFamily: 'Montserrat',
  fontSize: '1.5em',
  letterSpacing: '1px',
  color: '#FFEBEE',
  opacity: '0.8',
  '&:hover': {
    opacity: '1'
  }
})


const SubTitle =styled(Typography)({
  fontWeight: 500,
  fontSize: '0.8em',
  color: '#FBE9E7',
  letterSpacing:'0.5px'
})