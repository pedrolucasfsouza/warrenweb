import React, { useEffect, useState } from 'react';
import axios from 'axios'
export const GlobalContext = React.createContext(null)

function GlobalProvider({ children }) {

    const [transactions, setTransactions] = useState([])
    const [busca, setBusca] = useState('')
    const [select, setSelect] = useState('')
    const [filter, setFilter] = useState('busca')

    

    useEffect(() =>{
    axios.get('https://warren-transactions-api.herokuapp.com/api/transactions')
    .then(res => {
        setTransactions(res.data) 
    })
    },[])

    useEffect(()=>{
        setFilter('busca')
    },[busca])

    useEffect(()=>{
        setFilter('select')
    },[select])
    console.log(filter)
    
//filtrar table search
const lowerBusca = busca.toLocaleLowerCase()
const transactionsFiltradas = transactions
.filter((transaction) => transaction.description.toLowerCase().includes(lowerBusca)) 

//filtrar table select
const lowerSelect = select.toLocaleLowerCase()
const transactionsFiltradasSelect = transactions
.filter((transaction) => transaction.title.toLowerCase().includes(lowerSelect)) 

function switchFilter(){
    if (filter === 'busca') return transactionsFiltradas
    if (filter === 'select') return transactionsFiltradasSelect
    

}



    return (

        <GlobalContext.Provider value={{transactions, setTransactions, busca, setBusca, transactionsFiltradas, select, setSelect, transactionsFiltradasSelect, filter, switchFilter}}>

            {children}

        </GlobalContext.Provider>

    );
    
}

export default GlobalProvider;