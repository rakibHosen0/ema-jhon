import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventroy from "./components/Inventory/Inventroy";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetail/ProductDetails";
import Shipment from "./components/Shipment/Shipment";
import Login from "./components/Login/Login";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orderReview">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventroy></Inventroy>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/shipment">
            <Shipment />
          </Route>
          <Route exact path="/"></Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
