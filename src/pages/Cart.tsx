import React from 'react'
import { Table, Tag, Button } from 'antd'

import { deleteCart } from '../store/slices/cartSlice'
import { useAppSelector, useAppDispatch } from '../store/store'

export default function Cart() {
    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()

    const btnDelete = (id: string) => {
        return <Button type="primary" onClick={() => { dispatch(deleteCart(id)) }}>Delete</Button>
    }

    const columns = [
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Amount',
            key: 'quantity',
            render: (cart: any) => {
                return <p>{cart.price * cart.quantity}</p>
            }
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: (id: string) => (
                btnDelete(id)
            ),
        },
    ];


    return (
        <Table columns={columns} dataSource={cart} />
    )
}
