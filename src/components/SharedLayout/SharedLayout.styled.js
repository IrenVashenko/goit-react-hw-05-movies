import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Header = styled.header`
    //overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    // position: fixed; 
    top: 0;
    width: 100%;
`;

export const Container = styled.div`
   // max-width: 1145px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Nav = styled.nav`
    padding: 30px 0px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  

  &.active {
    color: white;
    background-color: orangered;
  }
`;
