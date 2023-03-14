import React from 'react'
import {
    Container, 
    Box
}
from '@mui/material'
import { styled } from '@mui/material/styles';




// Import Custom Components
import SocialMedia from '../components/SocialMedia'
import Profile from '../components/Profile'





const ProfilePage = () => {
  return (
    <PageWrapper>
        <Profile />
    </PageWrapper>
  )
}

export default ProfilePage






const PageWrapper = styled(Box)({
    paddingTop:'6rem',
    width: '100%',
    height: '100vh',
    backgroundImage: ' linear-gradient(to top, #870000, #190a05)',
    color: '#FFEBEE',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center',
    gap: '2em',
})

