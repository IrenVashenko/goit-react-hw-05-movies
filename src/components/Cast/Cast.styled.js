import styled from "styled-components";

export const Links = styled.ul`
    // display: flex;
    // flex-wrap: wrap;
    // //justify-content: center;
    // padding: 0px 30px;
    // margin: -8px;
    display: grid;
    //max-width: calc(100vw -48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 20px 16px;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`

export const Items = styled.li`
    // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    // list-style: none;
    // margin: 8px;
    // border-radius: 4px;
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Image = styled.img`
    // width: 100%;
    // display: block;
    // height: 300px;
    width: 100%;
    height: 300px;
    object-fit: cover;
`;

export const Content = styled.div`
    padding: 15px;
`;

export const Name = styled.p`
    font-weight: 500;
    margin-bottom: 10px;
`;

export const Container = styled.div`
    // max-width: 1145px;
    margin: 0 auto;
    padding: 0 16px;
`;