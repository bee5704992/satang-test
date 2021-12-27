import axios from 'axios'

export function requestGetCurrencyPair(currencyPair) {
    return axios.request({
        method: 'get',
        url: `https://satangcorp.com/api/v3/ticker/24hr?symbol=${currencyPair}`
    })
}