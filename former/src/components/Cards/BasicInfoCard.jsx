import * as React from 'react';
import { 

Box,
Button,
Tooltip,
Typography,
Container,
Grid,
Divider,
List,
ListItem,
ListItemIcon,
ListItemText

} from '@mui/material';

import Profile from './../../assets/images/profile.jpg'
import { styled } from '@mui/material/styles';

import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export default function BasicInfoCard() {


  return (

    <WrapperContainer>
        <CustomList>
            <CustomListItem>
                    <ListItemIcon><AttachEmailIcon sx={{color: '#F39999', fontSize:'3em'}} /></ListItemIcon>
                    <Title>Firstname</Title>
                    <SubTitle>Khalid</SubTitle>
            </CustomListItem>
        </CustomList>
    </WrapperContainer>
  );
}



const WrapperContainer = styled(Container)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap:'1.3rem',  
})


const CustomList = styled(List)({
    border: '1px solid #fff',
    borderRadius:'5%'
})





const CustomListItem = styled(ListItem)({
  width: '100%',
  marginRight:'2em'
})





const Title = styled(Typography)({
  fontWeight: 900,
  fontFamily: 'Montserrat',
  fontSize: '1.5em',
  letterSpacing: '1px',
  color: '#FFEBEE',
  opacity: '0.8',
  '&:hover': {
    opacity: '1'
  }
})


const SubTitle =styled(Typography)({
  fontWeight: 500,
  fontSize: '1.5em',
  color: '#FBE9E7',
  letterSpacing:'0.5px',
})