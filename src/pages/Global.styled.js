import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    //border-radius: 4px;
    text-decoration: none;
    background: rgba(255,255,255,.1);
	border: none;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	border-left: 5px solid #8a97a0;
    border-right: 5px solid #8a97a0;
	box-sizing: border-box; 
	background-color: #e8eeef;
	color:#5f676d;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
`;
