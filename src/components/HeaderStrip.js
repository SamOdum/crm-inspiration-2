import React, { useContext, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import {
  FaUser,
  FaMale,
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

const DropDownLi = styled.li`
  line-height: normal;
  cursor: pointer;
  visibility: visible;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fbfbfb;
`;
const DropDownA = styled.a`
  visibility: visible;
  list-style: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-decoration: none;
  transition: 0.5s all ease;
  position: relative;
  white-space: nowrap;
  line-height: 30px;
  color: #666;
  padding-left: 12px;
  display: block;
  text-transform: capitalize;
`;

const linkData1 = {
  id: 'my-account',
  linkTo: './my-account',
  preIcon: <FaUser />,
  postIcon: null,
  linkText: 'My Account',
};
const linkData2 = {
  id: 'wishlist',
  linkTo: './wishlist',
  preIcon: <FaHeart />,
  postIcon: null,
  linkText: 'Wishlist',
};
const linkData3 = {
  id: 'blog',
  linkTo: './blog',
  preIcon: <FaRss />,
  postIcon: null,
  linkText: 'Blog',
};
const linkData4 = {
  id: 'login',
  linkTo: './login',
  preIcon: <FaUnlockAlt />,
  postIcon: null,
  linkText: 'Login',
};
// const linkData5 = {
//   id: 'language',
//   linkTo: './leanguage',
//   preIcon: null,
//   postIcon: <FaAngleDown />,
//   linkText: 'English',
// };
const linkData6 = {
  id: 'currency',
  linkTo: './currency',
  preIcon: null,
  postIcon: <FaAngleDown />,
  linkText: 'NGN',
};
const linkData7 = {
  id: 'register',
  linkTo: './register',
  preIcon: null,
  postIcon: <FaAngleDown />,
  linkText: 'Register',
};

const dropDownMenuClose = {
  letterSpacing: ' 0.8px',
  color: ' #334141',
  lineHeight: ' normal',
  boxSizing: ' border-box',
  position: ' absolute',
  right: ' 0',
  top: ' 52px',
  padding: ' 10px',
  background: ' #fff',
  boxShadow: ' 0 2px 5px rgba(0,0,0,0.2)',
  opacity: ' 0',
  visibility: ' hidden',
  zIndex: ' 999',
  textAlign: ' left',
  minWidth: ' 114px',
  margin: ' auto',
};

const dropDownMenuOpen = {
  letterSpacing: ' 0.8px',
  color: ' #334141',
  lineHeight: ' normal',
  cursor: ' pointer',
  boxSizing: ' border-box',
  position: ' absolute',
  right: ' 6em',
  padding: ' 10px',
  background: ' #fff',
  boxShadow: ' 0 2px 5px rgba(0,0,0,0.2)',
  zIndex: ' 999',
  textAlign: ' left',
  top: ' 25px',
  opacity: ' 1',
  visibility: ' visible',
  minWidth: ' 114px',
  margin: ' auto',
};

const HeaderStrip = () => {
  const [dimensions] = useContext(DimensionContext);
  const [headerDropDown, setHeaderDropDown] = useState({});

  const openDropDown = (e) => {
    console.log(e.currentTarget.id);
    setHeaderDropDown({ [e.currentTarget.id]: true });
    console.log(headerDropDown);
  };
  const closeDropDown = (e) => {
    console.log(e.currentTarget.id);
    setHeaderDropDown({ [e.currentTarget.id]: false });
    console.log(headerDropDown);
  };
  // Keep secondary menu flyout from collapsing
  const keepDropDownOpen = (specific) => {
    console.log(specific);
    setHeaderDropDown({
      [specific]: true,
    });
    console.log(headerDropDown);
  };
  // Keep secondary menu flyout from collapsing
  const closeDropDownOnLeave = (specific) => {
    console.log(specific);
    setHeaderDropDown({
      [specific]: false,
    });
    console.log(headerDropDown);
  };

  const dropDownAnimation = useSpring({
    postion: 'absolute',
    opacity: headerDropDown[linkData7.id] ? 1 : 0,
    visibility: headerDropDown[linkData7.id] ? 'visible' : 'hidden',
    top: headerDropDown[linkData7.id] ? '28px' : '52px',
    // zIndex: headerDropDown[linkData7.id] ? '999' : '-1',
    pointerEvents: headerDropDown[linkData7.id] ? 'inherit' : 'none',
  });

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
              <IconLink
                linkData={linkData7}
                onMouseEnter={openDropDown}
                onMouseLeave={closeDropDown}
              />
              <animated.ul
                style={dropDownAnimation}
                className="dropdown"
                onMouseEnter={() => keepDropDownOpen(linkData7.id)}
                onMouseLeave={() => closeDropDownOnLeave(linkData7.id)}
              >
                <DropDownLi>
                  <DropDownA href="user-signup">
                    <span>
                      <FaUser />
                    </span>
                    {' As User'}
                  </DropDownA>
                </DropDownLi>
                <DropDownLi>
                  <DropDownA href="vendor-signup">
                    <span>
                      <FaMale />
                    </span>
                    {' As Vendor'}
                  </DropDownA>
                </DropDownLi>
              </animated.ul>
            </HeaderUtilGroup>
          </HeaderLinks>
        </Wrapper>
      </Container>
    </Strip>
  );
};

export default HeaderStrip;
