import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  FaUser,
  FaHeart,
  FaRss,
  FaUnlockAlt,
  FaAngleDown,
} from 'react-icons/fa';

import Container from './Container';
import IconLink from '../elements/IconLink';
import DimensionContext from '../contexts/DimensionContext';

const Strip = styled.section`
  background-color: ${(props) => props.theme.colours.white1};

  line-height: 30px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colours.black1};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderGreeting = styled.div`
  padding: 0 0.2em;
`;

const Welcome = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.8px;
  line-height: 30px;
  color: ${(props) => props.theme.colours.black2};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* position: relative; */
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: ${(props) => (props.dimensions < 576 ? 'none' : 'inline-block')};
`;

const HeaderLinks = styled.div`
  padding: 0 0.2em;
  display: flex;
  color: ${(props) => props.theme.colours.black1};
`;

const HeaderLinkGroup = styled.div`
  height: 80%;
  font-size: 12px;
`;

const Divider = styled.span`
  display: block;
  height: 15px;
  width: 1px;
  align-self: center;
  background-color: ${(props) => props.theme.colours.brand1};
`;

const HeaderUtilGroup = styled.div`
  padding-left: 12px;
  font-size: 12px;
  /* border-left: 1px solid red; */
`;

const linkData1 = {
  linkTo: './my-account',
  preIcon: <FaUser />,
  postIcon: '',
  linkText: 'My Account',
};
const linkData2 = {
  linkTo: './wishlist',
  preIcon: <FaHeart />,
  postIcon: '',
  linkText: 'Wishlist',
};
const linkData3 = {
  linkTo: './blog',
  preIcon: <FaRss />,
  postIcon: '',
  linkText: 'Blog',
};
const linkData4 = {
  linkTo: './login',
  preIcon: <FaUnlockAlt />,
  postIcon: '',
  linkText: 'Login',
};
// const linkData5 = {
//   linkTo: './leanguage',
//   preIcon: '',
//   postIcon: <FaAngleDown />,
//   linkText: 'English',
// };
const linkData6 = {
  linkTo: './currency',
  preIcon: '',
  postIcon: <FaAngleDown />,
  linkText: 'NGN',
};
const linkData7 = {
  linkTo: './register',
  preIcon: '',
  postIcon: <FaAngleDown />,
  linkText: 'Register',
};

const HeaderStrip = () => {
  const [dimensions] = useContext(DimensionContext);

  return (
    <Strip>
      <Container>
        <Wrapper>
          <HeaderGreeting>
            <Welcome dimensions={dimensions.width}>Welcome to Afia.com</Welcome>
          </HeaderGreeting>
          <HeaderLinks>
            <HeaderLinkGroup>
              <IconLink linkData={linkData1} />
              <IconLink linkData={linkData2} />
              <IconLink linkData={linkData3} />
              <IconLink linkData={linkData4} />
            </HeaderLinkGroup>
            <Divider />
            <HeaderUtilGroup>
              <IconLink linkData={linkData6} />
              <IconLink linkData={linkData7} />
            </HeaderUtilGroup>
          </HeaderLinks>
        </Wrapper>
      </Container>
    </Strip>
  );
};

export default HeaderStrip;
