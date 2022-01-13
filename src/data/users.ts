import { User } from '../types'

export const users: User[] = [
    {
        id: '1',
        username: 'guest',
        email: 'guest',
        password: 'guest',
    },
]

export function signin(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        )

        setTimeout(() => {
            if (foundUser) {
                resolve(foundUser)
            } else {
                reject('Email or password is invalid')
            }
        }, 3000)
    })
}
