import React, { Component } from "react";
import classes from "./App.css";
import LayOut from "./HOC/LayOut/LayOut";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Contenedores/MainPage/MainPage";
import Catalogo from "./Contenedores/Catalogo/Catalogo";
import Addproduct from "./Componentes/Catalogo/AddProduct/AddProduct";
import ProductoInfo from "./Componentes/Catalogo/ProductoInfo/ProductoInfo";
import ShopCar from "./Contenedores/ShopCar/ShopCar";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const selected = `/catalogo/${
      this.props.productSelected.id ? this.props.productSelected.id : ""
    }`;

    return (
      <div className={classes.App}>
        <BrowserRouter>
          <LayOut>
            <Switch>
              <Route path="/catalogo" exact component={Catalogo} />
              <Route path="/shop-car" exact component={ShopCar} />
              <Route path={selected} component={ProductoInfo} />
              <Route path="/addproduct" component={Addproduct} />

              <Route path="/" exact component={MainPage} />
            </Switch>
          </LayOut>
        </BrowserRouter>
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    productSelected: state.catalogo.productSelected,
  };
};
export default connect(mapPropsToState)(App);
