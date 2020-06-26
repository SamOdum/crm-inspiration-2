import React from 'react';
import styled from 'styled-components';
import {
  FaUser,
  FaHeart,
  FaRss,
  FaUnlockAlt,
  FaAngleDown,
} from 'react-icons/fa';

import Container from './Container';
import DimensionContext from '../contexts/DimensionContext';
import logo from '../assets/logo/front_logo.png';

const HeaderMiddle = () => {
  return (
    <Container>
      <div className="logo">
        <a title="Cross River Market" href="home.html">
          <img alt="responsive theme logo" src={logo} className="img-logo" />
        </a>
      </div>
    </Container>
  );
};

export default HeaderMiddle;
