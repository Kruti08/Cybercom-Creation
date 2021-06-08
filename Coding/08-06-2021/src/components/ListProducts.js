import React from 'react';
import {useSelector} from 'react-redux';

const ListProducts = () => {
    const products = useSelector(state => state.products.products);
    // console.log(products);

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
                    </tr>
                </thead>
            {products && products.map((product) => {
                return (
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.shortDescription}</td>
                            <td>{product.longDescription}</td>
                        </tr>
                    </tbody>    
                )
            })}
            </table>
        </React.Fragment>
    )
}

export default ListProducts;