import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 

Dialog,
DialogContent,
Box,
useMediaQuery,

} from '@mui/material';


import CustomButton from './../../components/Styled/CustomButton'

import { styled } from '@mui/material/styles';



export default function HireMeModal() {

  const [open, setOpen] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  
  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (

    <>
      <CustomButton handleClick={handleOpenModal}>
            Hire Me
      </CustomButton>
    
 
    
      <Dialog fullScreen={fullScreen} open={open} onClose={handleCloseModal}>
          <ContentWrapper>
            <DialogContent>
               <h1>Details</h1>
            </DialogContent>
          </ContentWrapper>
      </Dialog>
     

    </>
  );
}



const ContentWrapper = styled(Box)({
  padding: '1em',
  background: 'linear-gradient(to bottom, #EBDCC9, #fff)',
})