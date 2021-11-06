import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: flex-start;
padding: 0rem 10rem 0rem 10rem;
align-items: center;
width: 100%;
height: 80px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
background-color: #3E6BEC;
`
export const Content = styled.header`
width: 32%;
display: flex;
justify-content: space-between;
padding: 1rem;
input {
    width: 300px;
    height: 40px;
    border-radius: 1rem;
    border: none;
}
select{
    width: 150px;
    height: 40px;
    border-radius: 1rem;
    border: none;
}
`
