import { Link, useLocation, useParams } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const LayoutComponent = ({children}) => {
    const location = useLocation();
    const {currencyPair} = useParams()
    const setKey = () => {
        if(location.pathname === '/market/'+currencyPair?.toUpperCase()) return ['2']
        return ['1']
    }
    return (
        <Layout>
            <Header className="header" style={{padding:0}}>
            <Row justify='space-between'>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={setKey()}>
                    <Menu.Item key="1"><Link to='/'><img src='https://satangcorp.com/exchange/static/media/logo.d36e030d.svg' alt='satang' width='80px' /></Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/market/BTC_THB'>Exchange</Link></Menu.Item>
                </Menu>
                <Menu theme="dark" mode="horizontal" style={{ width: '100px' }} >
                    <Menu.Item key="3"><UserOutlined /> Sign in</Menu.Item>
                </Menu>
            </Row>
            </Header>

            <Layout style={{}}>
                <Content
                className="site-layout-background"
                style={{
                    margin: 0,
                }}
                >
                {children}
                </Content>
            </Layout>
        </Layout>
    )
};

export default LayoutComponent;