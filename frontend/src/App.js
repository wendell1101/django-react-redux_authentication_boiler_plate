import React from "react";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Alerts from "./components/layout/Alerts";
import { loadUser } from "./actions/authAction";
import store from "./store/store";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Alerts />
          <div className="container">
            <Switch>
              <Routes />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
