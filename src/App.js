//context
import ProductContextProvider from "./context/ProductContextProvider";
import CardContextProvider from "./context/CardContextProvider";

//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import NavigationBar from "./components/shared/NavigationBar";
import ShopCard from "./components/ShopCard";

import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CardContextProvider>
          <NavigationBar />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCard} />
            <Redirect to="/products" />
          </Switch>
        </CardContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
