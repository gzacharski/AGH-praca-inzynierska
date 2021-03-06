import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import { About, Blog, Client, Contact, Home, Login, News, Offer} from '../pages';

export default function Page(){
    return(
        <Container maxWidth='xl' component='main' data-testid='main-container'>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/blog' component={Blog}/>
                <Route path='/client' component={Client}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/login' component={Login}/>
                <Route path='/news' component={News}/>
                <Route path='/offer' component={Offer}/>
                <Redirect to='/'/>
            </Switch>
        </Container>
    );
}