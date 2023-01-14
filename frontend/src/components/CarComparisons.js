import React from 'react';
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

// Redux
import { selectCarsToCompare } from '../redux/features/compareSlice';


// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CarComparisons = () => {
    const carsToCompare = useSelector(selectCarsToCompare)

    const navigate = useNavigate();


    return (
        <div>
            {carsToCompare.map((car => (
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

                <Button onClick={() => navigate('/compare-cars')}>GO TO COMPARE</Button>
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
            )))}
            {carsToCompare.Name}
        </div>
    );
};

export default CarComparisons;