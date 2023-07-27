import React, { useEffect, useState } from 'react';
import Card from '../componets/Card';
import axios from 'axios';

const RopaHombres = () => {
    const[ropaHombres,setRopaHombres]=useState([])
    
    useEffect(()=>{
        GetData()
    },[])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => setRopaHombres(res.data))
    }

    return (
        <div className='producto'>
            {
                ropaHombres.map((productItem)=>(
                    <Card  key={productItem.id} description={productItem.description} image={productItem.image} price={productItem.price} title={productItem.title}/> 
                ))
            }
        </div>
    );
};

export default RopaHombres;