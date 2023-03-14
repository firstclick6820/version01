import React from 'react'
import {
    Box,
    Button
}
from '@mui/material'
import { styled } from '@mui/material/styles';


const StyledButton = ({children,handleClick}) => {
  return (
    <WrapperContainer>
        <DesignedButton onClick={handleClick}>
            {children}
        </DesignedButton>
    </WrapperContainer>
  )
}

export default StyledButton




const WrapperContainer = styled(Box)({
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
})

const DesignedButton = styled(Button)({
    '&:before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(120deg,transparent,rgba(237, 33, 58, 0.4),transparent)',
        transition: 'all 650ms ease-in-out',
    },
    '&:hover:before': {
        left:' 100%',
    },
    
    textDecoration: 'none',
    border: '1px solid rgba(237, 33, 58, 1)',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '1rem',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    fontSize: '1rem',
    padding: '0.5rem 2rem',
    color: '#FFEBEE',
    textTransform:'uppercase',
    transform:'scale(1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover, &:focus': {
        boxShadow: '1px 1px 25px 10px rgba(237, 33, 58, 0.4)',
        transform:'scale(1.05)',
    }
    
})
