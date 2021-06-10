import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <section>
            <ul>
                <li><Link to='/product/p1'>product 1</Link></li>
                <li><Link to='/product/p2'>product 2</Link></li>
                <li><Link to='/product/p3'>Product 3</Link></li>
            </ul>
        </section>
    )
}

export default Product;