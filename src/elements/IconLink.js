import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DimensionContext from '../contexts/DimensionContext';

const Anchor = styled.a`
  font-family: ${(props) => props.theme.fonts.base};
  font-size: inherit;
  font-weight: 400;
  margin-right: 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  /* line-height: 1; */
  position: relative;
  color: ${(props) => props.theme.colours.black1};
  transition: 0.5s all ease;
  ${(props) =>
    props.dimensions < 576 &&
    css`
      font-size: 140%;
    `}
  &:visited {
    color: ${(props) => props.theme.colours.black1};
  }
  &:hover {
    color: ${(props) => props.theme.colours.brand1};
  }
`;

const PreIcon = styled.span`
  display: inline-block;
  font-size: 10px;
  text-rendering: auto;
`;

const PostIcon = styled.span`
  font-weight: 400;
  font-size: 90%;
  /* vertical-align: baseline; */
  background-color: ${(props) => props.theme.colours.black2};
  color: ${(props) => props.theme.colours.white1};
  /* text-align: center; */
  display: inline-flex;
  padding: 0.4em;
  margin-left: ${(props) =>
    props.dimensions < 576 && props.linkData.preIcon ? '6px' : '0'};
`;

const Text = styled.span`
  font-weight: 400;
  padding-right: ${(props) => (props.linkData.postIcon ? '6px' : 0)};
  padding-left: ${(props) => (props.linkData.preIcon ? '6px' : 0)};
  display: ${(props) => (props.dimensions < 800 ? 'none' : 'inline-block')};
`;

/**
 * Renders an <IconLink /> component
 * @param  {object} linkData
 * @param  {string} [linkData.id] - Id of the button
 * @param  {string} [linkData.linkTo] - Path the button points to
 * @param  {element} [linkData.preIcon] - Icon component prepended to button
 * @param  {string} linkData.linkText - Text displayed on the button
 * @param  {number} [linkData.postIcon] - Number appended to button
 * @param  {string} name - Name of button for visual identification
 * @param  {function} [onMouseEnter] - Function to fire on mouse enter
 * @param  {function} [onMouseLeave] - Function to fire on mouse leave
 * @param  {object} [style] - instance-specific styles
 */
const IconLink = ({
  children,
  linkData,
  name,
  onMouseEnter,
  onMouseLeave,
  style,
}) => {
  const [dimensions] = useContext(DimensionContext);

  return (
    <Anchor
      id={linkData.id}
      name={name}
      href={linkData.linkTo}
      dimensions={dimensions.width}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      {linkData.preIcon && <PreIcon>{linkData.preIcon}</PreIcon>}
      <Text dimensions={dimensions.width} linkData={linkData}>
        {linkData.linkText}
      </Text>
      {linkData.postIcon && (
        <PostIcon dimensions={dimensions.width} linkData={linkData}>
          {linkData.postIcon}
        </PostIcon>
      )}

      {children}
    </Anchor>
  );
};

IconLink.defaultProps = {
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  style: {},
  children: [],
};

IconLink.propTypes = {
  linkData: PropTypes.shape({
    id: PropTypes.string,
    linkTo: PropTypes.string,
    preIcon: PropTypes.element,
    linkText: PropTypes.string,
    postIcon: PropTypes.element,
  }).isRequired,
  name: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  style: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default IconLink;
