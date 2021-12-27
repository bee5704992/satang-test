import {call, put} from 'redux-saga/effects'
import { requestGetCurrencyPair } from '../requests/currencyPair'
import { setCurrencyPair } from '../../dispatch/currencyPair'

export function* handleGetCurrencyPair(action){
    try {
        const response = yield call(requestGetCurrencyPair,action.payload)
        const {data} = response
        yield put(setCurrencyPair(data))
    } catch (error) {
        console.log(error)
    }
}