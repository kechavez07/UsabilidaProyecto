import React, { useEffect, useState } from 'react';
import Card from '../componets/Card';
import axios from 'axios';
import NavBar from '../componets/navBar'
import Filter from '../componets/Filter'

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
        <div className='paguina'>
            <NavBar/>
            <Filter/>
            <div className='producto'>
            {
                ropaHombres.map((productItem)=>(
                    <Card  key={productItem.id} description={productItem.description} image={productItem.image} price={productItem.price} title={productItem.title}/> 
                ))
            }
        </div>
        </div>
        
    );
};

export default RopaHombres;