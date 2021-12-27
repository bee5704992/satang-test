import {takeLatest} from 'redux-saga/effects'
import { handleGetCurrencyPair } from './handlers/currencyPair'
import {ACTIONS} from '../actions'

function* watcherSaga() {
    yield takeLatest(ACTIONS.FETCH_CURRENCY_PAIR, handleGetCurrencyPair)
}
export default watcherSaga