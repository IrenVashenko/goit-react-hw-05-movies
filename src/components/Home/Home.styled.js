import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Main = styled.main`
    //max-width: 1145px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Title = styled.h2``;

export const TrendingList = styled.ul`
    padding-left: 5px;
`;

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    text-decoration: none;
`;
