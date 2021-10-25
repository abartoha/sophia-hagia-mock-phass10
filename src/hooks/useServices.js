import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    // const [service, setService] = useState('');

    useEffect( () => {
        fetch(process.env.PUBLIC_URL+"/services.json")
        .then(res => res.json)
        .then(data => setServices(data))
    }, [])

    return {
        services
    };
}

export default useServices;