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


import emailjs from '@emailjs/browser';
import { styled } from '@mui/material/styles';
import HireMeCard  from '../Cards/HireMeCard';
import WorkExperienceCard from '../Cards/WorkExperienceCard';


const remarks = [
    {title: 'why me?', description: 'Results-oriented and Energetic professional with 7 years of experience and proven knowledge of Cost Management, General Accountant, Business Administration, Production, and Business Operations.  Apart from my Professional career, I am a self-taught Python Developer, Web Developer, Digital Marketing specialist, and GUI designer.'},

    {title: 'How can i help?', description: 'Results-oriented and Energetic professional with 7 years of experience and proven knowledge of Cost Management, General Accountant, Business Administration, Production, and Business Operations.  Apart from my Professional career, I am a self-taught Python Developer, Web Developer, Digital Marketing specialist, and GUI designer.'},

]




function HireMeForm() {
    const [step, setStep] = useState(0);
    const steps = ["Why Me?", "How Can I Help?", 'Hire Me'];

    const form = useRef()
    const [messageSent, setMessageSent] = useState(false)



    
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };
  
    const handleNext = () => {
        setStep(step + 1);
    };
  
    const handleBack = () => {
        setStep(step - 1);
    };




    const handleFormSubmit = (values,{ resetForm }) => {
    
        emailjs.sendForm('service_o3j0sjh', 'template_x2wpb6i', form.current, 'W7nDObKvKP2OODXLn')
        .then((result) => {
            setMessageSent(true)
            resetForm()
            setTimeout(() => {
              setMessageSent(false);
            }, 3000);

        }, (error) => {
            setMessageSent(false)
        });
    }



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
                    <WorkExperienceCard work={[]} />
                </StepWrapper>

                <Box display="flex" justifyContent="space-between" mt={5}>
                    <Box sx={{minWidth: '90%'}}></Box>
                    <CustomButton onClick={handleNext}>Next</CustomButton>
                </Box>
            </>
        )}

        {/* {step === 2 && (
            <Formik onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}>
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <FormBox ref={form} component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <FormControl fullWidth>
                                <CustomFormLabel>Fullname</CustomFormLabel>
                                <CustomTextInput
                                        required
                                        name='name'
                                        type="text"
                                        placeholder="Mohammad"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        error={!!touched.name && !!errors.name}
                                        helperText={touched.name && errors.name}/>
                            </FormControl>

                            <FormControl fullWidth>
                                <CustomFormLabel>Mobile</CustomFormLabel>
                                <CustomTextInput
                                            required
                                            name="mobile"
                                            type="text"
                                            placeholder='00971-52754-6685'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.mobile}
                                            error={!!touched.mobile && !!errors.mobile}
                                            helperText={touched.mobile && errors.mobile}/>
                            </FormControl>


                            <FormControl fullWidth>
                                <CustomFormLabel>Email</CustomFormLabel>
                                <CustomTextInput
                                            required
                                            name='email'
                                            type="email"
                                            placeholder='mohammadkhalidmomand@gmail.com'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.email}
                                            error={!!touched.email && !!errors.email}
                                            helperText={touched.email && errors.email}/>
                            </FormControl>


                            <FormControl fullWidth>
                                <CustomFormLabel>Message</CustomFormLabel>
                                <CustomTextInput
                                            multiline
                                            required
                                            rows={4}
                                            name="message"
                                            placeholder='Your message ...'
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.message}
                                            error={!!touched.message && !!errors.message}
                                            helperText={touched.message && errors.message}/>
                            </FormControl>
                        

                            {(
                            Object.keys(errors).length === 0 
                            && values.name
                            && values.email
                            && values.mobile
                            && values.message ) && 
                                <CustomButton disabled={
                                                !values.name ||
                                                !values.mobile ||
                                                !values.email ||
                                                !values.message || 
                                                Object.keys(errors).length > 0 } 
                                            type="submit">
                                    Send Message 
                                </CustomButton>
                            }

                            {messageSent && <SuccessMessage>Message Sent successfully</SuccessMessage>}

        
                        </FormBox>
                    )}
            </Formik>
        )} */}


    </WrapperContainer>
  );
}

export default HireMeForm;



const checkoutSchema = yup.object().shape({

    name: yup
                .string()
                .required("Required!")
                .min(6, "Should not be less then 6 characters.")
                .max(30, "Should not be more then 30 characters."),

    mobile:  yup 
                .string()
                .required("Required!")
                .matches(/^(00971)-\d{5}-\d{4}$/, 'Accepted Format 00971-XXXXX-XXXX'),

    email:     yup
               .string()
               .email('Invalid Format')
               .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
               .required("Required!"),
    message: yup
            .string()
            .required("Required!")
            .min(15, "Should not be less then 15 characters.")
            .max(500, "Should not be more then 500 characters."),



});


const initialValues = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};





// Wrapper Container
const WrapperContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})


// Form Box For Contact me
const FormBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.2em',
    
})


// Custom Input For Text
const CustomTextInput = styled(TextField)({
    color: '#FCE4EC',
    borderRadius: '0.5em',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
    width: '100%',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    padding: 0,
    background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {
        border: "none"
        }
    }
})



// Custom Label
const CustomFormLabel = styled(FormLabel)({
    color: '#FFEBEE',
    fontWeight: 500,
    fontSize: '1rem',
    opacity: 0.5,
})


const CustomButton = styled(Button)({
    width: '100%',
    marginTop: '0.5em',
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


const SuccessMessage = styled(Typography)({
  fontWeight: 900,
  marginTop: '1em',
  fontSize: '1.5em',
  color:'#FCE4EC',

})



const StepperWrapper = styled(Box)({
  widht: '100%',
  minHeight: '10vh',
  padding: '1em',
  marginTop: '0.5rem'
})


const StepWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})


