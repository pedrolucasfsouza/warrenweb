import { Container} from './styles'
import React, { useEffect, useState } from 'react';
import {GlobalContext} from '../../context/GlobalContext'

export default function TableTransactions() {
    const { transactionsFiltradasSelect,transactionsFiltradas, switchFilter, Filter } = React.useContext(GlobalContext)



return(
    <>
    <Container>
    <table>
        <thead>
            <tr>
                <th>Título</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
        {
        switchFilter().map((transaction)=>
            <tr>
            <td>{transaction.description}</td>
                        <td>{transaction.title}</td>
                        <td>{transaction.status}</td>
                        <td>R${transaction.amount}</td>
                    </tr>)}
         </tbody>
            </table>
        </Container>
</>

)
}