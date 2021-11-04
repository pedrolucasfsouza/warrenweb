import { Container, Content } from './styles'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Main() {
    const [transactions, setTransactions] = useState([])
    

    useEffect(() =>{
    axios.get('https://warren-transactions-api.herokuapp.com/api/transactions')
    .then(res => {
        setTransactions(res.data)
        
    })
    },[])
    console.log(transactions)

return(
    <Container>
        <Content>
        <input placeholder="Pesquise pelo título"></input>
        <select name="Status" id="status">
            <option value="processando">Processando</option>
            <option value="concluida">Concluída</option>
            <option value="solicitado">Solicitada</option>
        </select>
        </Content>
    </Container>
)
}