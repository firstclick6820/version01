

import { Card, CardContent, Box,} from '@mui/material';
import { styled } from '@mui/material/styles';



const CertificateCard = () => {
  return (
    <WrapperContainer>
      <StyledCard>
          <CardImage src="https://i.imgur.com/oYiTqum.jpg" alt="" />

          <CardOverlay>
            <CardHeader>
              <CardArc>
                <path />
              </CardArc>
              <CardThumb src="https://i.imgur.com/7D7I6dI.png" alt="" />
              <div className="card__header-text">
                <CardTitle>Jessica Parker</CardTitle>
                <CardStatus>1 hour ago</CardStatus>
              </div>
            </CardHeader>

            <StyledCardContent>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
              </CardDescription>
            </StyledCardContent>

          </CardOverlay>
    </StyledCard>
    </WrapperContainer>
  )
}



export default CertificateCard;



const WrapperContainer = styled(Box)({
  width: '98%',
  cursor:'pointer',
  minHeight:'50vh',
  height: 'auto',
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',

})


const StyledCard = styled(Card)`
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(40 * 1px);
  overflow: hidden;
  text-decoration: none;
`;


const StyledCardContent = styled(CardContent)`
  padding: 0;

  &:last-child {
    padding-bottom: 0;
  }
`;

const CardImage = styled('img')`
  width: 100%;
  height: auto;
`;

const CardOverlay = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc( -40 * 1px);
  background-color: #fff;
  transform: translateY(100%);
  transition:all 0.3s ease-in-out;

  &:hover {
    transform: translateY(10%);
  }
`;


const CardHeader = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 1em;
  border-radius: calc(-40 * 1px) 0 0 0;
  background-color: #fff;
  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;

  hover & {
    transform: translateY(0);
  }
`;

const CardArc = styled('svg')`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;

  path {
    fill: #fff;
    d: path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z');
  }
`;

const CardThumb = styled('img')`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CardTitle = styled('h3')`
  font-size: 1em;
  margin: 0;
  color: #6a515e;
`;

const CardStatus = styled('span')`
  font-size: 0.8em;
  color: #d7bdca;
`;

const CardDescription = styled('p')`
  padding: 0 1em 5em;
  color: #d7bdca;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;