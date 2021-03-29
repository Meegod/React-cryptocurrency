import  './Coin.css';
import  axios from 'axios';
import React,{useState,useEffect} from 'react';

function Coin({image,name,symbol,price,volume,pricechange,marketcap}) {
  
  
  

  return (
    <div className="coin-container">
       <div className="coin-row">
       <div className="coin">
<img src={image} alt="crypto" />
<h1>{name}</h1>
<p className="coin-symbol">{symbol}</p>
       </div>
       <div className="coin-data">
  <p className="coin-price">${price}</p>
 <p className="coin-volume">${volume.toLocaleString()}
  
  </p>
{pricechange <0 ?[
<p className="coin-percent red">{pricechange.toFixed(2)}%</p>

  ]:[
  <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
]}
<p className="coin-market">
Mkt cap:${marketcap.toLocaleString()}</p>


      
       </div>
   
       </div>
     
    </div>
  );
}

export default Coin;
