import React,{useState} from 'react';

export default function SearchCity(){

    const[query,setQuery] = useState('');
    const[weatherResponse,setWeatherResponse] = useState([]);
    
    const searchCity = async (e) =>{
        e.preventDefault();
        const api_key ="b56ea99769a745fb8e64bd39ca71114d";
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${api_key}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.data);
            setWeatherResponse(data.data);
        }
        catch(error){
            console.error(error);
        }
        
    }

    return(
        <>
            <form className="form" onSubmit={searchCity}>
                <label className="cityTitle" htmlFor="query">City Name : </label>
                <input type="text" value={query} name="query" onChange={(e)=>setQuery(e.target.value)} />
                <button className="btnSearch" type="submit">Search</button>
            </form>  
                {weatherResponse.map((res,i)=>(
                <div className="cardList" key={i}>
                    <p><strong>{res.datetime}</strong></p>
                    <p>Max temperature: {res.max_temp}</p>
                    <p>Min temperature: {res.min_temp}</p>
                    <p>{res.weather.description}</p>
                </div>
                )
                 )}
        </>
    )
}