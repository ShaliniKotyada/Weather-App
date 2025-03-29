import Card from '@mui/material/Card';
import INIT_IMG from './images.jpeg'; 
import IMG_COLD from './image_cold.jpeg'; 
import IMG_HOT from './images_hot.jpeg'; 
import IMG_SPRING from './image_spring.jpeg'; 
import IMG_RAIN from './image_rain.jpeg'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
export default function InfoBox({info}){
    INIT_IMG
    return(
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ info.temp===0? INIT_IMG :info.humidity > 80 ? IMG_RAIN :
        info.temp > 30 ? IMG_HOT :
        info.temp < 10 ? IMG_COLD : IMG_SPRING} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {   info.temp===0? "":
                info.humidity > 80 ? <ThunderstormIcon/> :
                info.temp > 30 ? <WbSunnyIcon/> :
                info.temp < 10 ? <AcUnitIcon/> : <EmojiNatureIcon/>} 
               
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
            <div>Temperatue: {info.temp}&deg;C</div>
            <br></br>
            <div>Maximim: {info.temp_max}&deg;C</div>
            <br></br>
            <div>Minimum: {info.temp_min}&deg;C</div>
            <br></br>
            <div>Humidity: {info.humidity}&deg;C</div>
            <br></br>
            <div>The Weather feels like {info.feels_like}&deg;C</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}