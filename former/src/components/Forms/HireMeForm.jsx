import { useRef, useState } from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import {
    Stepper,
    Step,
    StepLabel,
    TextField,
    Typography,
    Box, 
    FormControl,
    FormLabel,
    Button,
  } from "@mui/material";



import { styled } from '@mui/material/styles';
import HireMeCard  from '../Cards/HireMeCard';

import WorkExperienceCard from '../Cards/WorkExperienceCard';


import { remarks } from '../../assets/constant/data';



function HireMeForm() {
    const [step, setStep] = useState(0);
    const steps = ["About Me", "Who Am I ?", 'How can I help?'];




  
    const handleNext = () => {
        setStep(step + 1);
    };
  
    const handleBack = () => {
        setStep(step - 1);
    };



  return (
    <WrapperContainer>

        <StepperWrapper>
          <Stepper activeStep={step}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepperWrapper>

        {step === 0 && (
            <>
                <StepWrapper>
                    <HireMeCard title={remarks[0].title} description={remarks[0].description}/>
                </StepWrapper>

                <Box display="flex" justifyContent="space-between" mt={5}>
                    <Box sx={{minWidth: '90%'}}></Box>
                    <CustomButton onClick={handleNext}>Next</CustomButton>
                </Box>
            </>
        )}

        {step === 1 && (
            <>
                <StepWrapper>
                    <HireMeCard title={remarks[1].title} description={remarks[1].description}/>
                </StepWrapper>

                <Box display="flex" justifyContent="space-between" mt={5}>
                    <Box sx={{minWidth: '90%'}}></Box>
                    <CustomButton onClick={handleNext}>Next</CustomButton>
                </Box>
            </>
        )}


        {step === 2 && (
            <>
                <StepWrapper>
                    <HireMeCard  title={remarks[2].title} description={remarks[2].description}/>
                </StepWrapper>

                <Box display="flex" justifyContent="space-between" mt={5}>
                    <Box sx={{minWidth: '90%'}}></Box>
                    <CustomButton onClick={handleNext}>Next</CustomButton>
                </Box>
            </>
        )}


    </WrapperContainer>
  );
}

export default HireMeForm;



// Wrapper Container
const WrapperContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})


const CustomButton = styled(Button)({
    width: '100%',
    color: 'red',
    padding: '1em 0 1em 0',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
    '&:hover': {
      scale: '1.06'
    }
})




const StepperWrapper = styled(Box)({
  widht: '100%',
  minHeight: '10vh',
  padding: '0.5em',
})


const StepWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})


