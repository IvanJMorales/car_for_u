import React from 'react';

// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// React Router Imports
import { Link, useLocation } from 'react-router-dom';




const SearchResultsBody = () => {
    // Get state of search from Search Bar in SearchField.js
    const searchResultRef = useLocation();

    return (
        <div className='card-container'>
            {searchResultRef.state.searchResult.map((car) => (
                <Card className='card' raised='true' key={car.id} value={car.CarMake}>
                    <CardActionArea>
                        <Link to={'/car-info/' + car.id}>
                            <CardMedia
                                component="img"
                                alt="CAR IMAGE"
                                height="180"
                                image={car.Image}
                            />
                        </Link>
                    </CardActionArea>
                    <CardContent className='card-content'>
                        <Typography className='card-title' variant="h4">
                            {car.Name}
                        </Typography>
                        <Typography className='card-info' variant="h5" color="text.secondary" p='30px'>
                            Price: ${car.Price}
                        </Typography>
                        <Typography className='card-info' variant="h5" color="text.secondary" p='30px'>
                            Miles: {car.Miles}
                        </Typography>
                    </CardContent>
                    <CardActions className='actions'>
                        <a href={car.Link}>
                            <Button size="small">Go to site</Button>
                        </a>
                    </CardActions>
                </Card>
            )
            )}
        </div>

    );
};

export default SearchResultsBody;