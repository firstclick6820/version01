import React from 'react'
import {
Box,
Container,
Typography,
List,
ListItem,
ListItemIcon,
ListItemText,
LinearProgress,

}from '@mui/material'

import { styled } from '@mui/material/styles';


import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BugReportIcon from '@mui/icons-material/BugReport';
import CompressIcon from '@mui/icons-material/Compress';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const TechnicalSkillsCard = ({title, skills}) => {
  return (
    <WrapperContainer>
      <Title>{title}</Title>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill.name}>
            <IconBox>
              {skill.icon} 
            </IconBox>
            <SubTitle>{skill.name}</SubTitle>
          </ListItem>
        ))}
      </List>
    </WrapperContainer>
  );
}


export default TechnicalSkillsCard













const WrapperContainer = styled(Container)({
  width: '95%',
  height: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '2.5em',
  borderRadius: '1em',
  border: '1px solid #fff',
  transition: 'all 0.3s ease-in-out',
  "&:hover": {
    transform: 'scale(1.01)',
    backgroundImage: 'linear-gradient(to right, #fd1d1d, #fcb045)',

  }
})


const Title = styled(Typography)({
  fontWeight: 900,
  fontSize: '2em',
  color: '#FFEBEE',
  letterSpacing: '3px',
  textTransform:'uppercase',
  lineHeight:"2em",
  opacity:'0.8',
})

const SubTitle = styled(ListItemText)({
  fontWeight: 600,
  fontSize: '1.5em',
  color: '#fffebe',
  fontFamily:'Poppins',
  textTransform:'uppercase'

})


const IconBox = styled(ListItemIcon)({
    fontWeight:900,
    color: '#ffeeee'
})

