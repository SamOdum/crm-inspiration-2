import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from './Container';
import DimensionContext from '../contexts/DimensionContext';

const Strip = styled.section`
  background: #f5f5f5;
  background-color: #f5f5;
  line-height: 30px;
  width: 100%;
  color: #334141;
  border-bottom: 1px solid #ddd;
`;

const Welcome = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.8px;
  line-height: 30px;
  color: #334141;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* position: relative; */
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  display: ${(props) => (props.dimensions < 576 ? 'none' : 'inline-block')};
`;

const HeaderStrip = () => {
  const [dimensions] = useContext(DimensionContext);

  return (
    <Strip>
      <Container>
        {/* <div className="col-lg-4 col-sm-4 hidden-xs"> */}
        <Welcome dimensions={dimensions.width}>Welcome to Afia.com </Welcome>
        {/* </div> */}
      </Container>
    </Strip>
  );
};

export default HeaderStrip;
