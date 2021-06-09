import React,{useState} from "react";
import AddProducts from "./AddProducts";
import ListProducts from "./ListProducts";

const Products = () => {
    const [product, setProduct] = useState({});
    const [editProduct, setEditProduct] = useState(false);
    
    const editProductHandler = (product) => {
        setEditProduct(true);
        setProduct(product);
    }

    return(
        <React.Fragment>
            <AddProducts product={product} editProduct={editProduct} onChangeEdit={setEditProduct}/>
            <ListProducts onEditProduct ={editProductHandler} />
        </React.Fragment>
    )
}

export default Products;