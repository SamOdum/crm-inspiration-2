import React from 'react';
import styled from 'styled-components';

import Container from './Container';
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
