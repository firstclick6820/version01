import React from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';

// import Custom Components
import WorkExperienceCard from './../components/Cards/WorkExperienceCard';

import { works } from '../assets/constant/data';

const WorkExperiences = () => {
  const settings = {
    initialSlide: 0,
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    touchMove: true,
    autoplaySpeed: 6000,
    
  };

  return (
    <PageWrapper>
      <Container>
        <Slider {...settings}>
          {works &&
            works.map((work) => (
              <WorkExperienceCard key={work.id} work={work} />
            ))}
        </Slider>
      </Container>
    </PageWrapper>
  );
};



export default WorkExperiences;



const PageWrapper = styled(Box)({
  paddingTop: '10rem',
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(to top, #870000, #190a05)',
  color: '#FFEBEE',
});