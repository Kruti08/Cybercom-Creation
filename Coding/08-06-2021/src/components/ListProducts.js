import React from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import {productActions} from '../store/product-slice';

const ListProducts = (props) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const deleteProductHandler = (productId) => {
        dispatch(productActions.deleteProduct(productId));    
    }

    return(
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Price</th>
                        <th>Product Short Description</th>
                        <th>Product Long Description</th>
                        <th colSpan='2'>Actions</th>
                    </tr>
                </thead>
            {products && products.map((product) => {
                return (
                    <tbody key={product.id}>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.shortDescription}</td>
                            <td>{product.longDescription}</td>
                            <td>
                                <button onClick={props.onEditProduct.bind(this,product)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={deleteProductHandler.bind(this,product.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>    
                )
            })}
            </table>
        </React.Fragment>
    )
}

export default ListProducts;