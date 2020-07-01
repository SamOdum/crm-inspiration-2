import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 0 15px;
`;

/**
 * Renders a <Container /> component
 * @param  {object} props
 * @param  {element|[element]} props.children - Components or elements wrapped
 */
const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
