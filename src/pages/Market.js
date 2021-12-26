import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Market = () => {
    const [currencyPairDetails, setCurrencyPairDetails] = useState({})
    const {currencyPair} = useParams()
    
    useEffect(()=>{
        const fetchCurrencyPair = async() => {
            const res = await axios.get(`https://satangcorp.com/api/v3/ticker/24hr?symbol=${currencyPair}`)
            if(res) setCurrencyPairDetails(res.data)
        }
        fetchCurrencyPair()       
    },[currencyPair])

    const {symbol, lastPrice, volume} = currencyPairDetails

    return (
        <div>
            <div>
                <p>{symbol ? symbol.replace('_','/').toUpperCase() : null}</p>
                <p>{lastPrice}</p>
                <p>{volume ? `Volume: ${volume}` : null}</p>
            </div>
        </div>
    )
}
export default Market
