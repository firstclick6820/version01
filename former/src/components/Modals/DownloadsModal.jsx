import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 

Dialog,
DialogContent,
Box,
useMediaQuery,

} from '@mui/material';

import HireMeForm from '../Forms/HireMeForm';
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
          Downloads
      </CustomButton>
    
 
    
      <CustomDialog fullScreen={fullScreen} fullWidth maxWidth="md" open={open} onClose={handleCloseModal}>
          <ContentWrapper>
            <CustomDialogContent>
                <DownloadButton href="./Files/RESUME.pdf" download="RESUME.pdf" className="btn">
                    Resume
                </DownloadButton>

                <DownloadButton href="./Files/License.pdf" download="RESUME.pdf" className="btn">
                    Driving License
                </DownloadButton>

                <DownloadButton href="./Files/SchoolCertificate.pdf" download="RESUME.pdf" className="btn">
                    School Certificate
                </DownloadButton>
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


const DownloadButton = styled('a')({
    textAlign:'center',
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(to bottom, #ed213a, black)',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    borderRadius: '1rem',
    fontSize: '1.2rem',
    padding: '1rem',
    color: '#FFEBEE',
    textTransform:'uppercase',
    transition: 'all 0.3s ease-in-out',
    '&:hover, &:focus': {
        transform:'scale(1.1)',
    }
})