import styled from 'styled-components';
import { animated } from 'react-spring';

export const Strip = styled.section`
  background-color: ${(props) => props.theme.colours.white1};

  /* line-height: 30px; */
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colours.black1};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4% 0;
`;

export const HeaderGreeting = styled.div`
  /* padding: 0 0.2em; */
`;

export const Welcome = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  letter-spacing: 0.8px;
  line-height: 30px;
  color: ${(props) => props.theme.colours.black2};
  min-height: 1px;
  display: ${(props) => (props.dimensions < 576 ? 'none' : 'inline-block')};
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colours.black1};
`;

export const HeaderLinkGroup = styled.div`
  height: 80%;
  font-size: 12px;
`;

export const Divider = styled.span`
  display: block;
  height: 15px;
  width: 1px;
  align-self: center;
  background-color: ${(props) => props.theme.colours.brand1};
`;

export const HeaderUtilGroup = styled.div`
  padding-left: 12px;
  font-size: 12px;
  position: relative;
  /* border-left: 1px solid red; */
`;

export const DropDownListItem = styled.li`
  line-height: normal;
  cursor: pointer;
  visibility: visible;
  box-sizing: border-box;
  list-style: none;
  background: #fbfbfb;
`;
export const DropDownAnchor = styled.a`
  visibility: visible;
  list-style: none;
  background-color: transparent;
  text-decoration: none;
  position: relative;
  white-space: nowrap;
  line-height: 30px;
  color: ${(props) => props.theme.colours.black1};
  padding-left: 12px;
  display: block;
  text-transform: capitalize;
  &:visited {
    color: ${(props) => props.theme.colours.black1};
  }
  &:hover {
    color: ${(props) => props.theme.colours.brand1};
  }
`;

export const AnimatedDropdown = styled(animated.ul)`
  letter-spacing: 0.8px;
  color: #334141;
  line-height: normal;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 999;
  text-align: right;
  min-width: 114px;
  margin: auto;
`;
