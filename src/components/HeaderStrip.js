import React, { useContext, useState } from 'react';
import { useSpring } from 'react-spring';
import { FaUser, FaMale, FaMoneyBill } from 'react-icons/fa';

import Container from './Container';
import IconLink from '../elements/IconLink';
import DimensionContext from '../contexts/DimensionContext';
import {
  AnimatedDropdown,
  Divider,
  DropDownAnchor,
  DropDownListItem,
  HeaderGreeting,
  HeaderLinks,
  HeaderLinkGroup,
  HeaderUtilGroup,
  Strip,
  Welcome,
  Wrapper,
} from '../elements/HeaderStripElem';
import {
  linkData1,
  linkData2,
  linkData3,
  linkData4,
  // linkData5,
  linkData6,
  linkData7,
} from '../data/headerStrip';

const HeaderStrip = () => {
  const [dimensions] = useContext(DimensionContext);
  const [headerDropDown, setHeaderDropDown] = useState({});

  const openDropDown = (e) => {
    setHeaderDropDown({ [e.currentTarget.id]: true });
  };
  const closeDropDown = (e) => {
    setHeaderDropDown({ [e.currentTarget.id]: false });
  };
  // Keep secondary menu flyout from collapsing
  const keepDropDownOpen = (specific) => {
    setHeaderDropDown({
      [specific]: true,
    });
  };
  // Close secondary menu flyout from staying open
  const closeDropDownOnLeave = (specific) => {
    setHeaderDropDown({
      [specific]: false,
    });
  };

  // React springs animation for dropdown menu
  const dropDownAnchorCurrency = useSpring({
    postion: 'absolute',
    opacity: headerDropDown[linkData6.id] ? 1 : 0,
    visibility: headerDropDown[linkData6.id] ? 'visible' : 'hidden',
    top: headerDropDown[linkData6.id] ? '30px' : '52px',
    pointerEvents: headerDropDown[linkData6.id] ? 'inherit' : 'none',
  });
  const dropDownAnchorRegister = useSpring({
    postion: 'absolute',
    opacity: headerDropDown[linkData7.id] ? 1 : 0,
    visibility: headerDropDown[linkData7.id] ? 'visible' : 'hidden',
    top: headerDropDown[linkData7.id] ? '30px' : '52px',
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
              <IconLink linkData={linkData1} name="My Account" />
              <IconLink linkData={linkData2} name="Wishlist" />
              <IconLink linkData={linkData3} name="Blog" />
              <IconLink linkData={linkData4} name="Login" />
            </HeaderLinkGroup>
            <Divider />
            <HeaderUtilGroup>
              <IconLink
                linkData={linkData6}
                name="Currency"
                onMouseEnter={openDropDown}
                onMouseLeave={closeDropDown}
                style={{ position: 'relative' }}
              >
                <AnimatedDropdown
                  style={dropDownAnchorCurrency}
                  onMouseEnter={() => keepDropDownOpen(linkData6.id)}
                  onMouseLeave={() => closeDropDownOnLeave(linkData6.id)}
                >
                  <DropDownListItem>
                    <DropDownAnchor href="naira">
                      <span>
                        <FaMoneyBill />
                      </span>
                      {' NGN'}
                    </DropDownAnchor>
                  </DropDownListItem>
                  <DropDownListItem>
                    <DropDownAnchor href="dollar">
                      <span>
                        <FaMoneyBill />
                      </span>
                      {' USD'}
                    </DropDownAnchor>
                  </DropDownListItem>
                  <DropDownListItem>
                    <DropDownAnchor href="Euro">
                      <span>
                        <FaMoneyBill />
                      </span>
                      {' EURO'}
                    </DropDownAnchor>
                  </DropDownListItem>
                </AnimatedDropdown>
              </IconLink>
              <IconLink
                linkData={linkData7}
                name="Register"
                onMouseEnter={openDropDown}
                onMouseLeave={closeDropDown}
                style={{ marginRight: 0, position: 'relative' }} // This counsels out the margin-right set on the imported IconLink component
              >
                <AnimatedDropdown
                  style={dropDownAnchorRegister}
                  onMouseEnter={() => keepDropDownOpen(linkData7.id)}
                  onMouseLeave={() => closeDropDownOnLeave(linkData7.id)}
                >
                  <DropDownListItem>
                    <DropDownAnchor href="user-signup">
                      <span>
                        <FaUser />
                      </span>
                      {' As User'}
                    </DropDownAnchor>
                  </DropDownListItem>
                  <DropDownListItem>
                    <DropDownAnchor href="vendor-signup">
                      <span>
                        <FaMale />
                      </span>
                      {' As Vendor'}
                    </DropDownAnchor>
                  </DropDownListItem>
                </AnimatedDropdown>
              </IconLink>
            </HeaderUtilGroup>
          </HeaderLinks>
        </Wrapper>
      </Container>
    </Strip>
  );
};

export default HeaderStrip;
