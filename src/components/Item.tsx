import React from 'react'

import { addToCart } from '../store/slices/cartSlice'
import { Product } from '../types'
import { useAppDispatch } from '../store/store'
import { Card, Button, Row } from 'antd'

interface Props {
    product: Product
}

export default function Item({ product }: Props) {
    const dispatch = useAppDispatch()

    const { Meta } = Card;

    return (
        <Row>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.image} />}
            >
                <Meta title={product.title} description={product.price} />
                <Button type="primary" style={{ marginTop: '1em' }} onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}> {' '} Add To Cart</Button>
            </Card>
        </Row>
    )
}
