import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import theme from "../utils/theme";
import Header from './Header'
import QuestionContainer from "./QuestionContainer";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authedUser } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className='App'>
            <Header />
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/question/:id' component={QuestionContainer} />
              <Route path='/add' component={NewQuestion} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
