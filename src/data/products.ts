import { Product } from '../types'

export const products: Product[] = [
    {
        id: '3397',
        title: 'CryptoPunk #3397',
        price: 100,
        image: 'https://lh3.googleusercontent.com/64fj0AyH03TK23qlqBdFxDDhmgowZTqH-wTrYwrQyN1fmzvKQHsm06clfZAYZdcluzujmorxe9co9g8e-vPF3zl1faxjjo2esLZUhWM=s0'
    },
    {
        id: '9182',
        title: 'CryptoPunk #9182',
        price: 90,
        image: 'https://lh3.googleusercontent.com/eB8nPKLxs0WrAo9eiH06H_QZIzUuR7ecvUlpL_sowBZTOGvC5log8wdhey3HurUlfdfle0hHbJzLjpvBYbNC4lir=s0'
    },
    {
        id: '7378',
        title: 'CryptoPunk #7378',
        price: 80,
        image: 'https://lh3.googleusercontent.com/dhv81pREXC5YdTcmqvBjVS_dHCwEl5GxRsrQPvYQZHC5d172pIAlBq-x0GM94-eVpIV6cdBT1PWNzeeWpScrHNVw3kKffTEc6rEn=s0'
    },
    {
        id: '6718',
        title: 'CryptoPunk #6718',
        price: 70,
        image: 'https://lh3.googleusercontent.com/9fAHVpEED8mIoKp2FOLoyoJZlO37zthhILOFkQR05aKibeUddZDf4pqwhkmI5uuemOr5GeNdoTMTEY1y7eWpCzxBcRLPg6_Ns4t9=s0'
    },
    {
        id: '9454',
        title: 'CryptoPunk #9454',
        price: 60,
        image: 'https://lh3.googleusercontent.com/kUXA6wBjIs2lv5cbx4Hz4vUzceBmsQX1uk9WmZDQCQSvEQlhKpDrOr-eeAITNY_GJquwJ-P7P69uqexl_DRBrN5U=s0'
    }

]

export function getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
