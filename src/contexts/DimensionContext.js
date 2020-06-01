import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DimensionContext = createContext();

const debounce = (fn, ms, ...args) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn(args);
    }, ms);
  };
};

export const DimensionContextProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <DimensionContext.Provider value={[dimensions, setDimensions]}>
      {children}
    </DimensionContext.Provider>
  );
};

DimensionContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default DimensionContext;
