import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    background-color: #032541;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: gray;
    background-color: #6c5b91;
  }
`;
