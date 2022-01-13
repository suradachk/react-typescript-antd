import Item from '../components/Item'
import { useProducts } from '../hooks/useProducts'
import { Space, Spin } from 'antd'
export default function Products() {

    const { data: products, isLoading, error } = useProducts()

    if (isLoading) return <Spin />

    if (error) return <p>{error}</p>

    return (
        <>
            <Space size={15}>
                {!products || products.length === 0 ? (
                    <p>No products</p>
                ) : (
                    products.map((prod) =>
                        <Item key={prod.id} product={prod} />
                    )
                )}
            </Space>
        </>
    )
}
