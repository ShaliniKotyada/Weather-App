import {useState,useEffect} from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function Weather(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"",
        temp:0,
        temp_max:0,
        temp_min:0,
        humidity:0,
        feels_like:0
    });

    let updatedInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    }

   
    return(
    <>
    <SearchBox updatedInfo={updatedInfo} />
    <InfoBox info={weatherInfo}/>
    </>
    )
}