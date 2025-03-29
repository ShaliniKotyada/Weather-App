import "./SearchBox.css"
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function SearchBox({updatedInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
   

    const API_URL="https://api.openweathermap.org/data/2.5/weather?";//q={city name},{state code},{country code}&limit={limit}&appid={API key}"
    const API_KEY="841ae90e4486af2e118ce5795aa68194";

    
        let getInfo= async ()=>{
            try{
            let response = await fetch(`${API_URL}q=${city}&units=metric&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result={
                city:jsonResponse.name,
                temp:jsonResponse.main.temp,
                temp_max:jsonResponse.main.temp_max,
                temp_min:jsonResponse.main.temp_min,
                humidity:jsonResponse.main.humidity,
                feels_like:jsonResponse.main.feels_like
            }
            setError(false);
            return result;
        }
    catch(err){
       throw(err);
    }
}
    let handleChange=(e)=>{
        setCity(e.target.value);
    }

    let handleSubmit=async(e)=>{
        try{
        e.preventDefault();
        console.log(city);
        let newInfo= await getInfo();
        updatedInfo(newInfo);
        setCity("");
        }
        catch(err){
            setError(true);
        }
    }
    return(
        <div className="SearchBox">
            <h3>Search Weather Results!</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city}
            onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type="submit" >Get Weather</Button>
            </form>

            {error && <h3 style={{color:"red"}}>The City doesn't exist</h3>}
        </div>
    )
}