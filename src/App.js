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
import Navbar from "./components/Navbar";
import CityList from "./components/CityList";

function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <div className="container" style={{marginTop: '20px'}}>
          <Router>
            <Switch>
              <Route exact path="/airlist/:country/:state/:city" component={AirList} />
              <Route exact path="/citylist/:country/:city" component={CityList} />
              <Route exact path="/" component={Country} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </>
  );
}

export default App;
