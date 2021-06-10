import { useParams } from "react-router";

const ProductDetails = () => {
    const params = useParams();
    
    return (
        <h1>{params.productId}</h1>
    )
}

export default ProductDetails;