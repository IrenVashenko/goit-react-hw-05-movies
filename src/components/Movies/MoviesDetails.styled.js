import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    padding: 16px 0;
`;

export const Container = styled.div`
    //max-width: 1145px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const ContainerForm = styled.div`
    //max-width: 1145px;
    margin-left: 30px;
    // margin: 0 auto;
    padding: 20px 0px;
`;


export const BoxContent = styled.div`
    display:flex;
    margin-top: 20px;
`;

export const Image = styled.img`
    max-width: 350px;
`;

export const Content = styled.div`
    margin: 0px 0px 0px 20px;
`;
export const Title = styled.h2`

`;

export const Text = styled.p`
    margin: 3px;
    max-width: 600px;
`;

export const SubTitle = styled.h3`

`;

export const BoxGaner = styled.div`
    display: flex;
`;

export const CastReviews = styled.ul`
    display: flex;
    // justify-content: center;
`;
export const Links = styled(NavLink)`
    padding: 6px;
    text-decoration: none;
    color: #000;
    &.active {
    color: orangered;
    border-bottom: 2px solid orangered;
  }
`;

export const ButtonBack = styled(NavLink)`
	text-decoration: none;
	background: rgba(255,255,255,.1);
`;

export const Block = styled.div`
  display: flex;
  padding: 20px 0px;
`;
export const Div = styled.div`
  margin: 0px 5px;
`;

export const Icon = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center
`;