import { useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';


import { Switch, Route, useHistory, useLocation } from 'react-router-dom'



import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'
import { useAppSelector } from './store/store'


import './styles/global.scss'
import 'antd/dist/antd.css';

function UnAuthApp() {
    return (
        <Switch>
            <Route path='/signin'>
                <Signin />
            </Route>
            <Route path='/'>
                <Products />
            </Route>
        </Switch>
    )
}

function AuthApp() {
    return (
        <Switch>
            <Route path='/cart'>
                <Cart />
            </Route>
            <Route path='/'>
                <Products />
            </Route>
        </Switch>
    )
}

function App() {
    const { user } = useAppSelector((state) => state.auth)

    const history = useHistory()
    const location = useLocation()
    const { Header, Content, Footer } = Layout;

    useEffect(() => {
        if (!user && location.pathname === '/cart') history.push('/signin')
        else history.push('/')
    }, [user, history])

    return (
        <div className='App'>
            <Layout className="layout">
                <Nav />
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {!user ? <UnAuthApp /> : <AuthApp />}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Made with ❤ by Suradachk</Footer>
            </Layout>
        </div>
    )
}

export default App
