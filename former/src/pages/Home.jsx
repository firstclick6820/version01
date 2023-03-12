import React from 'react'
import {
    Container, 
    Box
}
from '@mui/material'
import { styled } from '@mui/material/styles';




import SocialMedia from '../components/SocialMedia'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <PageWrapper>
        <SocialMedia />
        <Profile />
    </PageWrapper>
  )
}

export default Home






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

