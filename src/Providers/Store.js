import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext()

export function StoreProvider(props){

    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser({
            id: 1,
            firstname: "Doe",
            lastname: "John"
        })
    }, [])

    return (
        <StoreContext.StoreProvider value={{ 
            user: user,
            setUser: setUser
         }}>
            {props.children}
        </StoreContext.StoreProvider>
    )
}

