import { Container, Content, Table, CotainerTable } from './styles'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableTransactions from '../Table/index'
import {GlobalContext} from '../../context/GlobalContext'


export default function Main() {
    const {transactions, setTransactions, busca, setBusca, select, setSelect} = React.useContext(GlobalContext)

return(
    <>
    <Container>
        <Content>
        <input placeholder="Pesquise pelo título" onChange={(ev)=> setBusca(ev.target.value)} value={busca}></input>
        <select name="Status" id="status" onChange={(ev => setSelect(ev.target.value))} value={select}>
            <option value="depósito">Depósito</option>
            <option value="movimentação interna">Movimentação interna</option>
            <option value="resgate">Resgate</option>
        </select>
        </Content>
        </Container>

        <TableTransactions></TableTransactions>
</>

)
}