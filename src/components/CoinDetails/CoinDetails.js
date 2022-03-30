import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const {id} =useParams()
    const [coin, setCoin] = useState({})
    useEffect(()=>{
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCoin(data))
    } ,[id])
    return (
        <div className=' px-4 pt-20 pb-24 mx-auto  max-w-7xl md:px-2 '>
    
         <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4  content-center md:justify-around'>

        <div>
           <h1 className='text-3xl mb-3'> General info : </h1>
           <hr></hr>
           <h1> Coin name : {coin.name}</h1>
           <h1> Market Cap : {coin.market_cap_rank}</h1>
        </div>

        <div className='flex justify-center items-center'>
           <img src={coin.image?.large} alt="" />
        </div>


         </div>
        </div>
    );
};

export default CoinDetails;