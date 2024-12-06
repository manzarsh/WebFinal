import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './user/Signup.jsx'
import PrivateRoute from './lib/PrivateRoute.jsx';
import EditProfile from './user/EditProfile.jsx'
import Signin from './lib/Signin.jsx';
import Home from './components/Home.jsx';
import AboutUs from './src/AboutUs.jsx';
import Contact from './src/Contact.jsx';
import TripPlanner from './src/TripPlanner.jsx';
import ActivitySuggestions from './src/ActivitySuggestions.jsx';
import WeatherForecast from './src/WeatherForecast.jsx';
import Layout from './components/Layout.jsx';

import Profile from './user/Profile.jsx'
import Users from './user/Users.jsx'

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/AboutUs" element={<AboutUs />} />
                <Route exact path="/WeatherForecast" element={<WeatherForecast />} />
                <Route exact path="/TripPlanner" element={<TripPlanner />} />
                <Route exact path="/ActivitySuggestions" element={<ActivitySuggestions />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route path="/users" element={<Users />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                
                <Route path="/user/edit/:userId" element={
                <PrivateRoute>
                <EditProfile />
                </PrivateRoute>
             }
 />
                
                <Route path= "/user/:userId" element={<Profile/>}
                />
            </Routes>
        </div>
    )
}
export default MainRouter