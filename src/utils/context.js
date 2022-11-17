import axios from "axios";
import React, {useState, useContext, useEffect} from "react";

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const url = "https://api.crispycravingscafe.com/api/"
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${url}products`)
            setProducts(res.data)
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return(
        <AppContext.Provider value={{products, setProducts}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
