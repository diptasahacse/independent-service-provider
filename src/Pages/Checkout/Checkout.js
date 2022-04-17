import React, { useEffect, useState } from 'react';
import useService from '../../hooks/useService';

const Checkout = () => {
    const [serviceId, setServiceId] = useState(0)
    useEffect(()=>{
        let id = JSON.parse(localStorage.getItem('serviceid'))
        setServiceId(id)
        
    },[])
    const serviceObj = useService(serviceId);
    return (
        <div>
            {
                serviceObj?.name
            }
            
        </div>
    );
};

export default Checkout;