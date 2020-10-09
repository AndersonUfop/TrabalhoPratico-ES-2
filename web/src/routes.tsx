import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreatePet from './pages/CreatePet';
import CreateUser from './pages/CreateUser';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component= { Home } path ="/" exact></Route>
            <Route component= { Dashboard } path ="/dashboard" ></Route>
            <Route component= { CreatePet } path ="/create-pet" ></Route>
            <Route component= { CreateUser } path ="/create-user" ></Route>
        </BrowserRouter>
    );
}

export default Routes;