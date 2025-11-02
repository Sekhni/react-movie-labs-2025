import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";


export default function MovieCard({ movie, action }) {
      const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };


  return (
  <Card sx={{ 
    backgroundColor: "rgba(161, 64, 187, 1)",
    color: "white",
    fontSize: 20
  }}>
    <CardHeader
      avatar={
        movie.favorite ? (
          <Avatar sx={{ backgroundColor: 'red' }}>
            <FavoriteIcon sx={{ fontSize: 20 }} />
          </Avatar>
        ) : null
      }
      title={
        <Typography variant="h5" component="p" sx={{ color: "white", fontSize: 20 }}>
          {movie.title}{" "}
        </Typography>
      }
    />

    <CardMedia
      sx={{ 
        height: 500, 
        
      }}
      image={
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : img
      }
    />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 5}}>
            <Typography variant="h6" component="p" sx={{ color: "white", fontSize: 15 }}>
              <CalendarIcon sx={{ fontSize: 15 }} />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p" sx={{ color: "white", fontSize: 15 }}>
              <StarRateIcon sx={{ fontSize: 15 }} />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
     <CardActions disableSpacing>
  
  {action(movie)}

  <Link to={`/movies/${movie.id}`} style={{ marginLeft: "auto" }}>
    <Button 
      variant="outlined" 
      size="small" 
      sx={{ 
        color: "white",
        borderColor: "white",
        fontSize: 15,
        '&:hover': {
          borderColor: "white"
        }
      }}
    >
      More Info
    </Button>
  </Link>
  
</CardActions>

    </Card>
  );
}