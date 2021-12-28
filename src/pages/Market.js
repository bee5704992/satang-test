import React,{useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getCurrencyPair } from '../redux/dispatch/currencyPair';
import { Layout, Menu } from 'antd';
import {Statistic, Row, Col, Button} from 'antd'

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

    const changeIcon = () => {
        if(currencyPair === 'BTC_THB' || currencyPair === 'btc_thb')
            return 'https://storage.googleapis.com/satang-pro/public/assets/icons/coins/btc.png'
        if(currencyPair === 'BUSD_THB' || currencyPair === 'busd_thb')
            return 'https://storage.googleapis.com/satang-pro/public/assets/icons/coins/busd.png'
        if(currencyPair === 'USDT_THB' || currencyPair === 'usdt_thb')
            return 'https://storage.googleapis.com/satang-pro/public/assets/icons/coins/usdt.png'
    }

    return (

        <Layout>
            <Sider className="site-layout-background">
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

            <div className='bg-main' style={{margin:'24px', width: '100%', height: '100%'}}>
                <div style={{padding:'24px'}}>
                    <Row>
                        <Col span={20}>
                            <Statistic title={symbol ? symbol.replace('_','/').toUpperCase() : null} value={lastPrice} />
                            <Statistic title={volume ? `Volume:` : null} value={volume ? `${volume}` : null} />
                        </Col>
                        <Col span={4} className='currency-icon' style={{textAlign:'end'}}>
                            <img src={changeIcon()} />
                        </Col>
                    </Row>
                 
                    <Button type='primary' style={{marginTop:'24px' }} >See Details</Button>
                   
                </div>
            </div>
        </Layout>

    )
}
export default Market
