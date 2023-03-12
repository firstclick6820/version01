import { Formik } from 'formik';
import * as yup from "yup";



import {
  Box, 
  TextField,
  Typography,
  FormControl,
  FormLabel,
  Button



} from '@mui/material';

import { styled } from '@mui/material/styles';





function ContactMeForm() {

    const handleFormSubmit = () => {
        console.log('working')
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
                    <FormBox component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <FormControl fullWidth>
                            <CustomFormLabel>Fullname</CustomFormLabel>
                            <CustomTextInput
                                    required
                                    name='fullname'
                                    type="text"
                                    placeholder="Mohammad Khalid Momand"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.fullname}
                                    error={!!touched.fullname && !!errors.fullname}
                                    helperText={touched.fullname && errors.fullname}/>
                        </FormControl>

                        <FormControl fullWidth>
                            <CustomFormLabel>Mobile</CustomFormLabel>
                            <CustomTextInput
                                        required
                                        name="mobile"
                                        type="text"
                                        placeholder='+971-52754-6685'
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
                                        rows={5}
                                        name="message"
                                        placeholder='Your message ...'
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.message}
                                        error={!!touched.message && !!errors.message}
                                        helperText={touched.message && errors.message}/>
                        </FormControl>
                     

                        <CustomButton>Send Message</CustomButton>
                    </FormBox>
                )}
        </Formik>

    </WrapperContainer>
  );
}

export default ContactMeForm;










const checkoutSchema = yup.object().shape({

    fullname: yup
                .string()
                .required("Required!")
                .min(6, "Should not be less then 6 characters.")
                .max(20, "Should not be more then 20 characters."),

    mobile:  yup 
                .string()
                .required("Required!")
                .min(10, "Should not be less than 10 characters.")
                .max(14, "Should not be more than 14 characters.")
                .matches(/^[0-9]{10,14}$/, "Invalid Format"),
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
  fullname: "",
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
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
    '&:hover': {
      background: 'white'
    }
})