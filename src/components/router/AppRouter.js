import React from 'react';

import {
    HashRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";

import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
  
export const AppRouter = () => {
    return (
        <Router>
      <div>
    
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          
          <Route  path="/" component={DashboardRoutes}/>
        </Switch>
      </div>
    </Router>
    )
}
