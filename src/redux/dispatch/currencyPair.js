import {ACTIONS} from '../actions'

export const getCurrencyPair = (currency_pair)=> ({
    type: ACTIONS.FETCH_CURRENCY_PAIR,
    payload: currency_pair
})

export const setCurrencyPair = (currency_pair) => ({
    type: ACTIONS.SET_CURRENCY_PAIR,
    payload: currency_pair
})