import React, { useState } from 'react'

import { useSignIn } from '../hooks/useSignin'
import { Form, Input, Button, Layout, notification, Alert } from 'antd';
import {
    UserOutlined,
    LockOutlined,
} from '@ant-design/icons';
export default function Signin() {
    const [email, setEmail] = useState('guest')
    const [password, setPassword] = useState('guest')

    const { mutate: signin, isLoading, error } = useSignIn()

    return (
        <Layout>
            <div
                className="d-flex align-items-center justify-content-center flex-column"
                style={{ maxWidth: '600px', margin: 'auto' }}
            >
                <div className="text-center">
                    <h2>React-Typescript-Antd</h2>
                </div>
                <Form className="login-form">
                    <Form.Item>
                        <Input
                            prefix={
                                <UserOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                            placeholder="Username"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={
                                <LockOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Item>
                    <Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-block m-t-15"
                            size="large"
                            onClick={() => signin({ email, password })}
                            loading={isLoading}
                        >
                            Sign in
                        </Button>
                    </Form.Item>
                    {error && <Alert
                        message={error}
                        type="error"
                    />}
                </Form>
            </div>
        </Layout>
    )
}
