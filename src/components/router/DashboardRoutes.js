import React from 'react';
import { Nav } from '../Nav';
import { Switch, Redirect } from 'react-router-dom';
import { Busqueda } from '../Busqueda';
import { Links } from '../Links';
import {Registrados} from '../Registrados';


import {
    
    Route,
    
  } from "react-router-dom";


export const DashboardRoutes = () => {
    return (
        <>
          <Nav />
          <div className="container mt-2" >
             <Switch>
                <Route exact path="/registro/" component={Links}/>
               
                <Route exact path="/busqueda/" component={Busqueda}/>
                <Route exact path="/registrados" component={Registrados}/>

                <Redirect to="/registro/"/>
             </Switch>    
          </div>  
        </>
    )
}
