import React from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';

// import Custom Components
import CertificateCard from './../components/Cards/CertificateCard';

import { works } from '../assets/constant/data';



const Certificates = () => {


  const settings = {
    initialSlide: 0,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    touchMove: true,
    autoplaySpeed: 4000,
    
  };

  return (
    <PageWrapper>
      <Container>
        <Slider {...settings}>
          {works &&
            works.map((work) => (
              <CertificateCard key={work.id} />
            ))}
        </Slider>
      </Container>
    </PageWrapper>
  );
};



export default Certificates;



const PageWrapper = styled(Box)({
  paddingTop: '10rem',
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(to top, #870000, #190a05)',
  color: '#FFEBEE',
});