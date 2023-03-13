import * as React from 'react';
import { 

Box,
Button,
Tooltip,
Typography


} from '@mui/material';


import { styled } from '@mui/material/styles';


export default function HireMeCard({title, description}) {


  return (

    <ContentWrapper>
        <TopBox>
            <Title>{title}</Title>
        </TopBox>


        <BottomBox>
            <DetailsBox>
              <Description>
                    {description}
              </Description>
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


// Bottom Box
const BottomBox = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
})






const Title = styled(Typography)({
  fontWeight: 900,
  fontSize: '4rem',
  color: '#FFEBEE',
  opacity: 1,
  textTransform: 'uppercase',
  letterSpacing: '8px'
})


const Description = styled(Typography)({
    letterSpacing: '2px',
    lineHeight: '2em'
})



// Bottom Box Item
const DetailsBox = styled(Box)({
    borderRadius: '1rem',
    backgroundImage:'linear-gradient(to bottom, #ed213a, black)',
    boxShadow: 'rgba(237, 33, 58, 0.3) 0px 19px 38px, rgba(237, 33, 58, 0.22) 0px 15px 12px;',
    Width: '100%',
    minHeight: '100%',
    padding: '1.7rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white'
})