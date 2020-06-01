import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DimensionContext from '../contexts/DimensionContext';

const Anchor = styled.a`
  font-family: ${(props) => props.theme.fonts.base};
  font-weight: 400;
  margin-right: 12px;
  text-decoration: none;
  line-height: 2;
  color: ${(props) => props.theme.colours.usafaBlue};
  ${(props) =>
    props.dimensions < 576 &&
    css`
      font-size: 140%;
    `}
`;

const PreIcon = styled.span`
  /* text-align: right; */
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  /* padding-right: 5px; */
  /* margin-right: 5px; */
  -webkit-font-smoothing: antialiased;
`;

const PostIcon = styled.span`
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 90%;
  /* text-align: right; */
  padding: 0.1em 0.4em;
  vertical-align: baseline;
  /* line-height: 2; */
  background-color: #fed700;
  color: #fff;
  text-align: center;
  /* color: red; */
  margin-left: ${(props) =>
    props.dimensions < 576 && props.buttonData.btnPreIcon ? '6px' : '0'};
  /* font-size: inherit; */
`;

const Text = styled.span`
  font-weight: 400;
  /* text-align: right; */
  /* margin-right: 6px; */
  padding-right: ${(props) => (props.buttonData.btnPostIcon ? '6px' : 0)};
  padding-left: ${(props) => (props.buttonData.btnPreIcon ? '6px' : 0)};
  display: ${(props) => (props.dimensions < 576 ? 'none' : 'inline-block')};
`;

/**
 * Renders an <IconButton /> component
 * @param  {object} buttonData
 * @param  {string} [buttonData.linkTo] - Path the button points to
 * @param  {element} [buttonData.btnPreIcon] - Icon component prepended to button
 * @param  {string} buttonData.btnText - Text displayed on the button
 * @param  {number} [buttonData.btnPostIcon] - Number appended to button
 */
const IconButton = ({ buttonData }) => {
  const [dimensions] = useContext(DimensionContext);

  return (
    <Anchor href={buttonData.linkTo} dimensions={dimensions.width}>
      {buttonData.btnPreIcon && <PreIcon>{buttonData.btnPreIcon}</PreIcon>}
      <Text dimensions={dimensions.width} buttonData={buttonData}>
        {buttonData.btnText}
      </Text>
      {buttonData.btnPostIcon && (
        <PostIcon dimensions={dimensions.width} buttonData={buttonData}>
          {buttonData.btnPostIcon}
        </PostIcon>
      )}
    </Anchor>
  );
};

IconButton.propTypes = {
  buttonData: PropTypes.shape({
    linkTo: PropTypes.string,
    btnPreIcon: PropTypes.element,
    btnText: PropTypes.string,
    btnPostIcon: PropTypes.element,
  }).isRequired,
};

export default IconButton;
// -webkit-tap-highlight-color: rgba(0,0,0,0);
// font-family: 'Arimo', sans-serif;
// letter-spacing: 0.5px;
// box-sizing: border-box;
// margin: 0;
// display: inline;
// padding: .2em .6em .3em;
// font-size: 75%;
// font-weight: 700;
// line-height: 1;
// color: #fff;
// text-align: center;
// white-space: nowrap;
// vertical-align: baseline;
// border-radius: .25em;
// float: right!important;
// background-color: #fed700;
// margin-left: 6px;
