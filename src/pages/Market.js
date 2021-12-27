import React,{useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getCurrencyPair } from '../redux/dispatch/currencyPair';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const Market = () => {
    const [currencyPairDetails, setCurrencyPairDetails] = useState({})
    const {currencyPair} = useParams()

    const dispatch = useDispatch()
    const state = useSelector(state => state.currencyPair.details)
    
    const {symbol, lastPrice, volume} = currencyPairDetails
    
    useEffect(()=>{
        dispatch(getCurrencyPair(currencyPair))     
    },[currencyPair,dispatch])

    useEffect(()=> setCurrencyPairDetails(state),[state])

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getCurrencyPair(currencyPair))
        }, 5000);
        return () => clearInterval(interval);
    }, [currencyPair,dispatch]);


    return (

        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                
                style={{ height: '100%', borderRight: 0, minHeight: '93vh' }}
                >        
                    <Menu.Item key="1"><Link to='/market/BTC_THB'>BTC/THB</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/market/BUSD_THB'>BUSD/THB</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/market/USDT_THB'>USDT/THB</Link></Menu.Item>
                </Menu>
            </Sider>

            <div style={{margin:'24px'}}>
                <p>{symbol ? symbol.replace('_','/').toUpperCase() : null}</p>
                <p>{lastPrice}</p>
                <p>{volume ? `Volume: ${volume}` : null}</p>
            </div>
        </Layout>

    )
}
export default Market
