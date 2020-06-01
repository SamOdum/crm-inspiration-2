import React from 'react';
// import {
//   FaUnlockAlt,
//   FaPhoneSquare,
//   FaUserCheck,
//   FaSave,
// } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { ThemeProvider } from 'styled-components';

import Global from './styles/global';
import theme from './styles/theme';
import './styles/App.css';

import Home from './pages/Home';
// import IconButton from './elements/IconButton';
import { DimensionContextProvider } from './contexts/DimensionContext';

// const buttonData = {
//   linkTo: '/login',
//   btnText: 'Login',
//   btnPreIcon: <FaUnlockAlt />,
// };
// const buttonData2 = {
//   linkTo: '',
//   btnText: '08031234567',
//   btnPreIcon: <FaSave />,
//   btnPostIcon: '0',
// };
// const buttonData3 = {
//   linkTo: '',
//   btnText: 'Engaged',
//   btnPreIcon: <FaUserCheck />,
//   btnPostIcon: '4',
// };

function App() {
  return (
    <DimensionContextProvider>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ className: 'react-icons' }}>
          <Global />
          <Home />
          {/* <IconButton buttonData={buttonData} />
          <IconButton buttonData={buttonData2} />
          <IconButton buttonData={buttonData3} /> */}
        </IconContext.Provider>
      </ThemeProvider>
    </DimensionContextProvider>
  );
}

export default App;
