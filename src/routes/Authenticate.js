//Let's get started!
import React, { Fragment, Component } from 'react';
import '../App.css';

//import modules
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//import components
import Home from '../components/home/Home';
import QuestionDetail from '../components/home/QuestionDetail';
import Leaderboard from '../components/leaderboard/Leaderboard';
import NewQuestion from '../components/newQuestion/NewQuestion'
import NotFound from '../components/NotFound'
import Login from '../components/login/Login';

//function passed to Reduxes Connect to populate store
const mapStateToProps = (store) => {
  let username=(store.user.loggedInAs)?store.user.loggedInAs:""
  return {
    loggedInUser: username
  }
}

//function passed to Reduxes Connect to dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

class Authenticate extends Component {
  render() {
     const { loggedInUser } = this.props;
     return (
     <Fragment>
        {loggedInUser ? (
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/" exact component={Home} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/add" exact component={NewQuestion} />
                <Route path="/questions/:questionId" exact component={QuestionDetail} />
                <Route path="*" component={NotFound} />
            </Switch>
        ) :
          (
            <Route component={Login} />
        )
    }
    </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Authenticate));
