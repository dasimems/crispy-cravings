import axios from "axios";
import React, {useState, useContext, useEffect} from "react";

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const url = "https://api.crispycravingscafe.com/api/"
    const [productLoaded, setProductLoaded] = useState({
        loaded: false,
        message: ""    
    })
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${url}products`);
            setProducts(res.data)
            setProductLoaded(prevState=> {
                return({
                    ...prevState,
                    loaded: true,
                    message: "success"
                })
            })

        } catch (error) {
            console.log(`Error: ${error}`)
            setProductLoaded(prevState=> {
                return({
                    ...prevState,
                    loaded: true,
                    message: "failed"
                })
            })
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return(
        <AppContext.Provider value={{products, setProducts, productLoaded}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
