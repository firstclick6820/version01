import { Formik } from 'formik';
import * as yup from "yup";



import {
  Box, 
  TextField,
  FormControl,
  FormLabel,
  Button,
  Typography



} from '@mui/material';

import { styled } from '@mui/material/styles';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';



function ContactMeForm() {
    const form = useRef()
    const [messageSent, setMessageSent] = useState(false)


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

    </WrapperContainer>
  );
}

export default ContactMeForm;










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
      background: 'linear-gradient(to bottom, #fff, #EBDCC9)',
      scale: '1.01'
    }
})


const SuccessMessage = styled(Typography)({
  fontWeight: 900,
  marginTop: '1em',
  fontSize: '1.5em',
  color:'#FCE4EC',

})