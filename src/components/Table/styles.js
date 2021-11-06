import styled from "styled-components";

export const Container = styled.header`
display: flex;
justify-content: center;
table {
        width: 80%;

     th {
         font-weight: 600;
         background-color: #737380;
         padding: 1rem 2rem;
         text-align: left;
         line-height: 1.5rem;
         color: white;
        }
    }

    tr:nth-child(even) {background: #f5f5f5}
    tr:nth-child(odd) {background: #f1f1f1}

    td{
        padding: 10px;
    }
`



