import "./App.css";

import NavBar from "./components/layout/navBar/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import CartContainer from "./components/cart/CartContainer";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Checkout from "./components/cart/Checkout";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductDetails from "./components/products/ProductDetails";
import NotFound from "./components/NotFound/NotFound";
import UserProfile from "./components/users/UserProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart/checkout" component={Checkout} />
            <Route path="/cart" component={CartContainer} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
