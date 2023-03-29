import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/api";


const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => { 
        makeApiCall();
    }, [endpoint])

    // whenever we use await we have to use async()
    const makeApiCall = async() => {
        const res = await fetchDataFromApi(endpoint)
        setData(res);
    }

    return {data}; // returns the data state
}

export default useFetch;