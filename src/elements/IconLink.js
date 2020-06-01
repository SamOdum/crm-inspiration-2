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
    props.dimensions < 576 && props.linkData.PreIcon ? '6px' : '0'};
  /* font-size: inherit; */
`;

const Text = styled.span`
  font-weight: 400;
  /* text-align: right; */
  /* margin-right: 6px; */
  padding-right: ${(props) => (props.linkData.PostIcon ? '6px' : 0)};
  padding-left: ${(props) => (props.linkData.PreIcon ? '6px' : 0)};
  display: ${(props) => (props.dimensions < 576 ? 'none' : 'inline-block')};
`;

/**
 * Renders an <IconLink /> component
 * @param  {object} linkData
 * @param  {string} [linkData.linkTo] - Path the button points to
 * @param  {element} [linkData.PreIcon] - Icon component prepended to button
 * @param  {string} linkData.linkText - Text displayed on the button
 * @param  {number} [linkData.PostIcon] - Number appended to button
 */
const IconLink = ({ linkData }) => {
  const [dimensions] = useContext(DimensionContext);

  return (
    <Anchor href={linkData.linkTo} dimensions={dimensions.width}>
      {linkData.PreIcon && <PreIcon>{linkData.PreIcon}</PreIcon>}
      <Text dimensions={dimensions.width} linkData={linkData}>
        {linkData.linkText}
      </Text>
      {linkData.PostIcon && (
        <PostIcon dimensions={dimensions.width} linkData={linkData}>
          {linkData.PostIcon}
        </PostIcon>
      )}
    </Anchor>
  );
};

IconLink.propTypes = {
  linkData: PropTypes.shape({
    linkTo: PropTypes.string,
    PreIcon: PropTypes.element,
    linkText: PropTypes.string,
    PostIcon: PropTypes.element,
  }).isRequired,
};

export default IconLink;
