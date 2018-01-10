import React from "react";
import {Link, Route, Switch} from "react-router-dom"
import Service from "../Service";
import services from "../../shared/services.json"


function Services(props){

    
    return(
        <div className="services">
            <h1>Services</h1>
            <div className="services">
               {services.map((service, i)=>{
                   return <Link key = {i} to={`/services/${i}`}>{service.name}</Link>
               })}
               <Switch>
                   <Route path='/services/:index' component={Service}/>
               </Switch>
            </div>
        </div>
    )
}

export default Services; 
