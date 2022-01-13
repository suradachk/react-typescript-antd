import React, { useState } from 'react'
import { Layout, Menu, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom'
import {
    ShoppingOutlined,
    ShoppingCartOutlined,
    LoginOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import avatar from '../static/image/users.png'

import { signout } from '../store/slices/authSlice'
import { useAppSelector, useAppDispatch } from '../store/store'

export default function Nav() {
    const [active, SetActive] = useState("");
    const { Header } = Layout;
    const { SubMenu } = Menu;


    const cart = useAppSelector((state) => state.cart)
    const { user } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()


    return (
        <Header className='headerTop' >
            <div className="logo" />
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['product']}
            >
                <Menu.Item key="product" style={{ float: 'left' }}>
                    <Link to="/">
                        <ShoppingOutlined /> Product
                    </Link>
                </Menu.Item>
                <Menu.Item key="cart" >
                    {user && (
                        <Link to='/cart'>
                            <Badge count={cart.reduce(
                                (sum, item) => sum + item.quantity,
                                0
                            )}>
                                <ShoppingCartOutlined /> Cart {' '}
                            </Badge>
                        </Link>
                    )}
                </Menu.Item>

                {user ? (
                    <SubMenu
                        key="profile"
                        title={
                            <span>
                                <Avatar size={24} src={avatar} />
                                <span> {user.username}</span>
                            </span>
                        }
                        className=""
                        style={{ position: 'absolute', right: '0' }}
                    >
                        <Menu.Item key="logout" onClick={() => dispatch(signout())}><LogoutOutlined /> Logout</Menu.Item>
                    </SubMenu>
                ) : (
                    <Menu.Item key="signin" style={{ position: 'absolute', right: '0' }}>
                        <Link to="/signin">
                            <LoginOutlined /> Sign in
                        </Link>
                    </Menu.Item>
                )}
            </Menu>
        </Header>
    )
}
