import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, CssBaseline, Divider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import Home from '../Components/HomePage'; // Assuming Home is in the same directory
import Courses from '../Components/Courses';

const drawerWidth = 240;

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = React.useState('Home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'Home':
        return <Home />;
      case 'Courses':
        return <Courses />;
      case 'Users':
        return <Typography variant="h4">User Management</Typography>;
      case 'Settings':
        return <Typography variant="h4">Platform Settings</Typography>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            Online Learning Platform
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Avatar alt="User" src="/user.jpg" />
            <Typography variant="body1">John Doe</Typography>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[{ text: 'Home', icon: <HomeIcon /> }, { text: 'Courses', icon: <MenuBookIcon /> }, { text: 'Users', icon: <PeopleIcon /> }, { text: 'Settings', icon: <SettingsIcon /> }].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => setSelectedPage(item.text)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, mt: 8 }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;
