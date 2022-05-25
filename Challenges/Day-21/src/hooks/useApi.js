import { useEffect, useState } from "react";


const useApi = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchApi = () => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                setLoading(true);
                setData(respuestaJson.data)
                //console.log(respuestaJson);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi();        
    }, [url])

    return { loading, data }
}
 
export default useApi;