import React, { useEffect, useState } from 'react';
import '../styles/VehicleDetailsContainer.css';

// MUI Imports
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const VehicleDetailsContainer = (props) => {
  const car = props.car;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleDrawerOpen();
  }, [])

  const carLink = car.Link;
  
  const sendToDealer = () => {
    window.location.href = carLink
  }

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
              marginTop: 15,
              marginRight: 1,
              height: 300,
              background: 'whitesmoke',
            },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div className='vehicle-title'>
          {car.Name}
        </div>
        <List>
          <ListItem className='vehicle-price'>
            ${car.Price}
          </ListItem>
          <ListItem className='vehicle-miles'>
            {car.Model} {car.Miles} miles
          </ListItem>
            <Button onClick={() => sendToDealer()}>
              Go To Dealer
            </Button>
        </List>
      </Drawer>
  );
}

export default VehicleDetailsContainer;