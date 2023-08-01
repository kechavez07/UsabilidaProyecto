import React, { useEffect, useState } from 'react';
import Card from '../componets/Card';
import axios from 'axios';
import NavBar from '../componets/navBar'
import Filter from '../componets/Filter'

const Tecnologia = () => {
    const[tecnologia,setTecnologia]=useState([])
    
    useEffect(()=>{
        GetData()
    },[])

    const GetData=()=>{
        axios.get("https://fakestoreapi.com/products/category/electronics")
        .then(res => setTecnologia(res.data))
    }

    return (
        <div>
            <NavBar/>
            <Filter/>
            <div className='producto'>
            {
                tecnologia.map((productItem)=>(
                    <Card  key={productItem.id} description={productItem.description} image={productItem.image} price={productItem.price} title={productItem.title}/> 
                ))
            }
            </div>
        </div>
        
    );
};

export default Tecnologia;