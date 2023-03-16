import React from 'react'
import {
Box,
Container,
Typography
}from '@mui/material'

import { styled } from '@mui/material/styles';




const WorkExperienceCard = ({work}) => {
    const {position, company, start_date, end_date, description, location} = work


  return (
    <WrapperContainer>
        <TopBox>
            <Box display="flex" flexDirection="column" justifyContent="center">
                <Title>{position}</Title>
                <SubTitle>{company} - <small>({location})</small></SubTitle>
                <Date>{start_date } - {end_date}</Date>
            </Box>
            <CompanyImage />
        </TopBox>

        <BottomBox>
            <Description>{description}</Description>
        </BottomBox>
    </WrapperContainer>
  )
}

export default WorkExperienceCard













const WrapperContainer = styled(Container)({
  width: '95%',
  height: 'max-content',
  minHeight:'60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundImage: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  padding: '2.5em',
  borderRadius: '1em',
  gap: '2em',
  cursor:'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    scale: '0.98'
  },
})



const TopBox = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem'
})



const Title = styled(Typography)({
  fontWeight: 900,
  fontSize: '1.8em',
  color: 'white',
  letterSpacing: '2px',
  textTransform:'uppercase'

})

const SubTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: '1.2em',
  color: 'orange',
  textTransform:'uppercase'

})

const Date = styled(Typography)({
  fontWeight: 900,
  fontSize: '0.8em',
  letterSpacing: '0.2em',
  textTransform:'uppercase'
})


const CompanyImage = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  width: '120px',
  height: '120px',
  borderRadius: '10%',
  cursor: 'pointer',
  backgroundImage: `url(https://picsum.photos/200/300)`,
  backgroundSize: '100% 100%',
  // backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
  transition: 'all 0.3s ease-in-out',
  boxShadow: 'rgba(237, 33, 58, 0.3) 0px 19px 38px, rgba(237, 33, 58, 0.22) 0px 15px 12px;',
  '&:hover': {
    scale: '1.05'
  },
  '@media screen and (max-width: 767px)': { // hide on screens smaller than 768px
    display: 'none'
  }
})




const Description = styled(Typography)({
  letterSpacing: '1px',
  lineHeight: '1.5em',
  textIndent: '3em'
})




const BottomBox = styled(Box)({
  padding: '2em 1em 1em 1em',
  '@media screen and (max-width: 767px)': { // hide on screens smaller than 768px
    padding: 0,
  }
})
