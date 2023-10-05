"use client"
import { LoginDocument, LoginMutation } from "@/types/graphql-request"
import Nav from "./Nav"
import { useMutation } from "@apollo/client"


const NavWrapper = () => {
    const items = ["Home", "About", "Contact"];
    const [login, { loading }] = useMutation(LoginDocument, {
        variables: {
            loginUserInput: {
                "password": "GuestUser123",
                "email": "guest@gmail.com",
            }
        },
        onCompleted: (data: LoginMutation) => {
            console.log(data);
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