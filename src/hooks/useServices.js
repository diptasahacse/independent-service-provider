import { useEffect, useState } from "react"

const useServices = () =>{
    const [allServices, setAllServices] = useState([])
    useEffect(()=>{
        fetch('servicesData.json')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])

    return [allServices, setAllServices];
}

export default useServices;