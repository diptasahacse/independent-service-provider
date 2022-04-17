import useServices from "./useServices"

const useService = (id) =>{
    const [allServices, setAllServices] = useServices()
    const serviceObj = allServices.find(item => item.id === id);

    return(serviceObj)

}
export default useService;