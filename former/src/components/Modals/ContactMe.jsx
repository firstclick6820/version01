import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 

Dialog,
DialogContent,
Box,
useMediaQuery,

} from '@mui/material';

import ContactMeCard from '../Cards/ContacMe';
import ContactMeForm from '../Forms/ContactMe';
import CustomButton from './../../components/Styled/CustomButton'
import { styled } from '@mui/material/styles';



export default function ContactMeModal() {

  const [open, setOpen] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


  
  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (

    <>
      <CustomButton handleClick={handleOpenModal}>
            Contact Me
      </CustomButton>
    
 
    
      <CustomDialog fullScreen={fullScreen} fullWidth maxWidth="md" open={open} onClose={handleCloseModal}>
          <ContentWrapper>
            <CustomDialogContent>
              <ContactMeCard />
              <ContactMeForm />
         
            </CustomDialogContent>
          </ContentWrapper>
      </CustomDialog>
     

    </>
  );
}



const CustomDialog = styled(Dialog)({
 
})



const ContentWrapper = styled(Box)({
  padding: '2rem',
  backgroundImage: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  
})

const CustomDialogContent = styled(DialogContent)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridTemplateRows: 'auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '4rem',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto',
    justifyContent: 'center', 
  },
});
