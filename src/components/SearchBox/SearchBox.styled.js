import styled from "styled-components";


export const Form = styled.form`
`;

export const Input = styled.input`
	background: rgba(255,255,255,.1);
	border: none;
	border-radius: 4px;
	font-size: 15px;
	margin: 0;
	outline: 0;
	padding: 10px;
	width: 250px;
	box-sizing: border-box; 
	background-color: #e8eeef;
	color:#8a97a0;
	box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
	margin-bottom: 30px;
`;

export const Button = styled.button`
    border: 0px;
    border-radius: 4px;
	font-size: 15px;
	margin: 0px 0px 0px 10px;
	outline: 0;
	padding: 10px;
    color: orangered;
    cursor: pointer;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    &:hover {
        background-color: orangered;
         color: #fff;
    }
`;


