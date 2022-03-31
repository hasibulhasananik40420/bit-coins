import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const {id} =useParams()
    const [coin, setCoin] = useState({})
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCoin(data))
        .finally(()=>setLoading(false)
        )
    } ,[id])
    return (
       
   <>
   
   {loading ? <Spinner></Spinner> :
    <div className='h-[70vh] px-4 pt-20 pb-24 mx-auto  max-w-7xl md:px-2 mb-60'>
    
    <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4  content-center md:justify-around'>
    
    <div className='order-2 md:order-1'>
      <h1 className='text-3xl mb-3'> General info : </h1>
      <hr className='mb-2'></hr>
      <h1> Coin name : {coin.name}</h1>
      <h1> Market Cap : {coin.market_cap_rank}</h1>
       <h1>Origin : {coin.country_origin ? coin.country_origin : 'Not Available'} </h1>
       <h1>Contract Address :{coin.contract_address} </h1>
       <h1>Hashing Algorithm : {coin.hashing_algorithm} </h1>
       <h1> Genesis Date:{coin.genesis_date} </h1>
       <h1> Last Updated : {coin.last_updated} </h1>
    
    
       <h1 className='text-3xl mt-4'>Scores:</h1>
         <hr className='mb-2 mt-2' />
         <h1>Community Score: {coin.community_score}</h1>
         <h1>Developer Score: {coin.developer_score}</h1>
         <h1>Liquidity Score: {coin.liquidity_score}</h1>
         <h1>Public Interest Score: {coin.public_interest_score}</h1>
    </div>
    
    <div className='flex order-1 md:order-2 justify-center items-center'>
      <img src={coin.image?.large} alt="" />
    </div>
    
    
    </div>
    </div>}
   
   </>

    );
};

export default CoinDetails;