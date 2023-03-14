import React from 'react';
import { Container, Box , useMediaQuery} from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';

// import Custom Components
import CertificateCard from './../components/Cards/CertificateCard';

import { works } from '../assets/constant/data';



const Certificates = () => {

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const slidesToShow = isLargeScreen ? 3 : (isMediumScreen ? 2 : 1);


  const settings = {
    initialSlide: 0,
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: slidesToShow, // set the slidesToShow value
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