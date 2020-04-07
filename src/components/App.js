import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import theme from "../utils/theme";
import Header from "./Header";
import QuestionContainer from "./QuestionContainer";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from './Login';


class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser, userProfile } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Header user={authedUser} profile={userProfile} />
          <div className='App'>
            <Switch>
              {!authedUser && <Route to='/login' component={Login} />}

              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' component={QuestionContainer} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const userProfile = users[authedUser]
  return {
    authedUser,
    userProfile
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
