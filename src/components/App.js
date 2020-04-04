import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import theme from "../utils/theme";
import Header from './Header'

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { authUser } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className='App'>
            <Header />
            <Switch>
              <Route path='/' exact component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}
export default connect(mapStateToProps, { handleInitialData })(App);
