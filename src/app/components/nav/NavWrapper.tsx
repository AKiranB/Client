"use client"
import { LoginDocument, LoginMutation } from "@/types/graphql-request"
import Nav from "./Nav"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/navigation"


const NavWrapper = () => {
    const router = useRouter()
    const items = ["Home", "About", "Contact"];
    const [login, { loading }] = useMutation(LoginDocument, {
        variables: {
            loginUserInput: {
                "password": "GuestUser123",
                "email": "guest@gmail.com",
            }
        },
        onCompleted: (data: LoginMutation) => {
            const user = data.login.user
            localStorage.setItem('user', JSON.stringify(user))
            router.push('/dashboard')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const handleLogin = () => {
        login()
    }
    return (<Nav items={items} handleLogin={handleLogin} loading={loading} />)
}
export default NavWrapper