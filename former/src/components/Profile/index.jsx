import React, { useState } from 'react'
import {
    Button,
    Box,
    Typography,
    Container,
    Grid,
    Divider,
}
from '@mui/material'

import { styled } from '@mui/material/styles';



// import Images
import Profile from './../../assets/images/profile.jpg'

// import modals
import ContactMeModal from '../Modals/ContactMeModal';
import HireMeModal from '../Modals/HireMeModal';
import Downloads from '../Modals/DownloadsModal';
import BasicInfoModal from '../Modals/BasicInfoModal'


import SocialMedia from './../SocialMedia'


const index = () => {

  return (
    <WrapperContianer>
        <ImageBox>
            <UserProfile/>
        </ImageBox>
     
        <DetailsBox>
            <Username>Mohammad Khalid Momand</Username>
            <UserJob>Software Engineer || Full-Stack Web Developer</UserJob>
        </DetailsBox>
        
        <SocialMedia />

        <Grid container gap={1} justifyContent="center" alignItems="center">

            <Grid item xs={6} sm={3} md={2}>
                <HireMeModal />
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
                <ContactMeModal />
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
                <Downloads />
            </Grid>
            
            
            
        </Grid>



    </WrapperContianer>
  )
}

export default index




const WrapperContianer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'1em',
    textAlign: 'center'
})


const ImageBox = styled(Box)({
    position: 'relative',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
    margin: '0 0 1em 0',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
    cursor: 'pointer',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease-in-out',
    touchAction: 'manipulation',
    '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '1px 1px 25px 10px rgba(27, 33, 158, 0.4)',
    }
})





const UserProfile=  styled(Box) ({
    position: "absolute",
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundImage: `url(${Profile})`,
    boxShadow: 'rgba(237, 33, 58, 0.3) 0px 19px 38px, rgba(237, 33, 58, 0.22) 0px 15px 12px;',
    backgroundSize: '100% 100%',
    transition: 'all 0.3s ease-in-out'
});

const DetailsBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign: 'center',


})




const Username = styled(Typography)({
    fontWeight: 900,
    fontSize: '1.5rem',
    color: '#FFEBEE',
})


const UserJob = styled(Typography)({
    fontWeight: 400,
    fontSize: '1rem',
    color: 'orange'
})

