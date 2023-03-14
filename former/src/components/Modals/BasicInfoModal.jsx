import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 

Dialog,
DialogContent,
Box,
useMediaQuery,

} from '@mui/material';


import BasicInfoCard from '../Cards/BasicInfoCard';
import CustomButton from '../Styled/CustomButton'
import { styled } from '@mui/material/styles';



export default function Downloads() {

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
          Basic Info
      </CustomButton>
    
 
    
      <CustomDialog fullScreen={fullScreen} fullWidth maxWidth="md" open={open} onClose={handleCloseModal}>
          <ContentWrapper>
            <CustomDialogContent>
               <BasicInfoCard />
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
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    gridTemplateColumns: '1fr', // for small devices
    '@media (min-width: 768px)': { // for medium devices
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (min-width: 1024px)': { // for large devices
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  });
