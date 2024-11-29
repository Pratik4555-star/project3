// making the custom hooks for the curency converter

import { useEffect,useState } from "react";

function usecurrencyInfo(currency ){

    const [data, setData] = useState({})
    useEffect(() => { 
    //     

        fetch( `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json `
        )
        .then((res)=> res.json())
        .then((res) => setData(res[currency] ))
        console.log(data)
                 
    
    },[currency])
    return data
    }  

    export default usecurrencyInfo