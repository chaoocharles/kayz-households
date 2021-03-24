import "./App.css";

import NavBar from "./components/layout/navBar/NavBar";
import Home from "./components/pages/Home";
import Footer from './components/layout/Footer';
import CartContainer from "./components/cart/CartContainer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/cart" component={CartContainer} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
