import React from "react"

import { ShoppingCartProvider } from "./ShoppingCartContext";
import CompHeader from "../app/Components/header";
import ProductList from "../app/products/page";

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
    <ProductList/>
    <CompHeader/>
    </ShoppingCartProvider>
  );
};

export default App;

