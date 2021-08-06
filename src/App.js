import { store } from "./redux";
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AirList from "./components/AirList";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Country from "./components/Country";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/airlist" component={AirList} />
              <Route exact path="/" component={Country} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
