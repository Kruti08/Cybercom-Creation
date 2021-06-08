import React from "react";
import AddProducts from "./AddProducts";
import ListProducts from "./ListProducts";

const Products = () => {
    return(
        <React.Fragment>
            <AddProducts />
            <ListProducts />
        </React.Fragment>
    )
}

export default Products;