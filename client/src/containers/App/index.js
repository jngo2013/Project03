import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react'

import AllTodosList from '../AllTodosList';
import UserTodoList from '../UserTodoList';

import LandingPage from "../../components/LandingPage";
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import JoinEvent from '../JoinEvent'
import Profile from './../../containers/Profile';
import './app.css'
import EventsDashboard from './../../components/EventsDashboard';
import ShowEventContainer from './../../containers/ShowEventContainer'
// import HeroVideo from "../../components/HeroVideo";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './../../components/Navbar';
import CreateEvent from "../CreateEvent";

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid>
        <Navbar authenticated={this.props.authenticated}/>
        </Container>
        {/*<HeroVideo />*/}
       <div className='hero'>
         <div className='hero-overlay'>
           <h1 className='hero-title'>Cool-Name.com</h1>
         </div>
         <img src='https://images.unsplash.com/photo-1584573062914-a1f7848470a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' className='hero-image'/>
       </div>
        <Container fluid className='app-main-container'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
          <Container className='main-cover'>
              <Route exact path='/' component={SignIn}/>
              <Route exact path='/signup' component={SignUp}/>
          </Container>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/createevent' component={CreateEvent}/>
                <Route exact path='/profile' component={Profile}/>
          <Route exact path='/eventsdashboard' component={EventsDashboard} />
          <Route exact path='/alltodos' component={ShowEventContainer}/>
          <Route exact path='/usertodos' component={UserTodoList}/>
          <Route exact path='/joinEvent' component={JoinEvent}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="footer">
            <p>Footer</p>
          </div>
        </Container>

      </div>
    )
  }
}
function mapStateToProps(state) {
  return {authenticated: state.auth.authenticated};
}
export default connect(mapStateToProps)(App);