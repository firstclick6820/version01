import React from 'react'
import {
    Container, 
    Box
}
from '@mui/material'
import { styled } from '@mui/material/styles';


import SkillsTabs from './../components/Tabs/SkillsTab'




const Skills = () => {
  return (
    <PageWrapper>
        <Container>
            <SkillsTabs />
        </Container>
    </PageWrapper>
  )
}

export default Skills










const PageWrapper = styled(Box)({
    paddingTop:'10rem',
    width: '100%',
    height: '100vh',
    backgroundImage: ' linear-gradient(to top, #870000, #190a05)',
    color: '#FFEBEE',
    gap: '2em',
})

