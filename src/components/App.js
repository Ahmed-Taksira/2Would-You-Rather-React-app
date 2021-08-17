import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import SignIn from './SignIn'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Home from './Home';
import Leaderboard from './Leaderboard'
import Question from './Question';
import NewQuestion from './NewQuestion';
import Nav from './Nav'
import NotFound from './NotFound';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
}
  render() {    
    return (
      <Router>
        <div className="center">
        <LoadingBar />
        <Nav/>
        {this.props.loading===true? <SignIn/> : 
          <div>
            <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/home' component={Home}/>
            <Route path='/questions/:id' component={Question}/>
            <Route path='/add' component={NewQuestion}/>
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route component={NotFound}/>
            </Switch>
          </div>
        }
    </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser===null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)

