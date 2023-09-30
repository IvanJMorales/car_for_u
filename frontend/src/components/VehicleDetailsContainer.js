import React, { useEffect } from 'react';
import '../styles/VehicleDetailsContainer.css';

// MUI Imports
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const drawerWidth = 240;

const VehicleDetailsContainer = (props) => {
  const car = props.car
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleDrawerOpen();
  })
  

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
        <List>
          <div>
            {car.Name}
          </div>
          <ListItem>
            Price: {car.Price}
          </ListItem>
          <ListItem>
            Miles: {car.Miles}
          </ListItem>
        </List>
      </Drawer>
  );
}

export default VehicleDetailsContainer;