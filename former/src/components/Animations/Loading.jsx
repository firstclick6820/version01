import React from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/material/styles';

import { Box } from '@mui/material';


const Loading = ({size, color}) => {
  return (
    <WrapperContainer>
        <BouncingSpinner size={size} color={color}>
          <div className="sk-child sk-double-bounce-1" />
          <div className="sk-child sk-double-bounce-2" />
        </BouncingSpinner>
    </WrapperContainer>
  );
};

export default Loading;




const WrapperContainer = styled(Box)({
  position: "absolute",
  top: '50%',
  left:'50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

})

const bounceAnimation = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.0);
  }
`;



const BouncingSpinner = styled('div')`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin: auto;
  .sk-child {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => props.color};
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${bounceAnimation} 2s infinite ease-in-out;
  }

  .sk-double-bounce-2 {
    animation-delay: -1s;
  }
`;
