import logo from "./logo.svg";
import "./App.css";
import { store } from "./redux";
import {Provider} from 'react-redux';
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="">
          App
        </div>
      </Provider>
    </>
  );
}

export default App;
