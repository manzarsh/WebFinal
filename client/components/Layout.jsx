import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from '../lib/auth-helper';


const headerStyle = {
  backgroundColor: 'black',
  textAlign: 'center',
  padding: '2em 0',  
  height: 'auto', 
};

const logoStyle = {
  width: '400px',
  maxWidth: '100%',
  height: 'auto',
};

const appBarStyle = {
  backgroundColor: '#333', 
  height: '50px', 
};

const navLinkStyle = (isActive) => ({
  color: isActive ? '#ff4081' : '#08C2FF',
  textDecoration: 'none',
  margin: '0 10px',
  fontSize: '14px', 
});


const isActive = (location, path) => {
  return location.pathname === path;
};


export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {}
      <header style={headerStyle}>
        <Link to="/">
          <img
            src="./images/Logo1.png"
            alt="My Logo"
            style={logoStyle}
          />
        </Link>
      </header>

      {}
      <AppBar position="static" style={appBarStyle}>
        <Toolbar style={{ minHeight: '50px', padding: '0 10px' }}>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1, fontSize: '16px' }}>
          </Typography>

          <Link to="/">
            <IconButton aria-label="Home" style={navLinkStyle(isActive(location, "/"))}>
              <HomeIcon />
            </IconButton>
          </Link>

          <Link to="/AboutUs" style={navLinkStyle(isActive(location, "/AboutUs"))}>
            About Us
          </Link>

          <Link to="/ActivitySuggestions" style={navLinkStyle(isActive(location, "/ActivitySuggestions"))}>
            Activity Suggestions
          </Link>

          <Link to="/TripPlanner" style={navLinkStyle(isActive(location, "/TripPlanner"))}>
            Trip Planner
          </Link>

          <Link to="/WeatherForecast" style={navLinkStyle(isActive(location, "/WeatherForecast"))}>
            Weather Forecast
          </Link>

          <Link to="/Contact" style={navLinkStyle(isActive(location, "/Contact"))}>
            Contact
          </Link>

          <Link to="/users" style={navLinkStyle(isActive(location, "/users"))}>
            Users
          </Link>

          {!auth.isAuthenticated() && (
            <>
              <Link to="/signup" style={navLinkStyle(isActive(location, "/signup"))}>
                Sign Up
              </Link>
              <Link to="/signin" style={navLinkStyle(isActive(location, "/signin"))}>
                Sign In
              </Link>
            </>
          )}

          {auth.isAuthenticated() && (
            <>
              <Link
                to={`/user/${auth.isAuthenticated().user._id}`}
                style={navLinkStyle(isActive(location, `/user/${auth.isAuthenticated().user._id}`))}
              >
                My Profile
              </Link>
              <Button
                color="inherit"
                onClick={() => {
                  auth.clearJWT(() => navigate('/'));
                }}
                style={{ fontSize: '14px', color: '#ffffff' }} 
              >
                Sign Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
