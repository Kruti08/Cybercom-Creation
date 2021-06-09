// product name
// product category
// product price 
// product short description
// product long description
import { useDispatch } from 'react-redux';
import '../hooks/use-input';
import useInput from '../hooks/use-input';
import { productActions} from '../store/product-slice';

const isNotEmpty = (value) => value.trim() !=='';
const hasShortLength = (value) => isNotEmpty(value) && value.length<=40;

const AddProducts = (props) => {

    const dispatch = useDispatch();

    const {
        value: productName,
        isValid: productNameIsValid,
        hasError: productNameHasError,
        updateValueHandler: setProductNameHandler,
        inputBlurHandler: productNameBlurHandler,
        reset: resetProductName
    } = useInput(hasShortLength);
    
    const {
        value: productCategory,
        isValid: productCategoryIsValid,
        hasError: productCategoryHasError,
        updateValueHandler: setProductCategoryHandler,
        inputBlurHandler: productCategoryBlurHandler,
        reset: resetProductCategory
    } = useInput(hasShortLength);
    
    const {
        value: productPrice,
        isValid: productPriceIsValid,
        hasError: productPriceHasError,
        updateValueHandler: setProductPriceHandler,
        inputBlurHandler: productPriceBlurHandler,
        reset: resetProductPrice
    } = useInput(isNotEmpty);
    
    const {
        value: productShortDescription,
        isValid: productShortDescriptionIsValid,
        hasError: productShortDescriptionHasError,
        updateValueHandler: setProductShortDescriptionHandler,
        inputBlurHandler: productShortDescriptionBlurHandler,
        reset: resetProductShortDescription
    } = useInput(hasShortLength);
    
    const {
        value: productLongDescription,
        isValid: productLongDescriptionIsValid,
        hasError: productLongDescriptionHasError,
        updateValueHandler: setProductLongDescriptionHandler,
        inputBlurHandler: productLongDescriptionBlurHandler,
        reset: resetProductLongDescription
    } = useInput(isNotEmpty);

    let isFormValid = false;

    if(productCategoryIsValid && productNameIsValid && productPriceIsValid && productShortDescriptionIsValid && productLongDescriptionIsValid){
        isFormValid=true;
    }

    const productNameClasses = productNameHasError ? 'form-control invalid': 'form-control';
    const productCategoryClasses = productCategoryHasError ? 'form-control invalid': 'form-control';
    const productPriceClasses = productPriceHasError ? 'form-control invalid': 'form-control';
    const productShortDescriptionClasses = productShortDescriptionHasError ? 'form-control invalid': 'form-control';
    const productLongDescriptionClasses = productLongDescriptionHasError ? 'form-control invalid': 'form-control';

    const addProductHandler = (event) => {
        event.preventDefault();
        console.log(props.editProduct);
        props.onChangeEdit(false);
    }
    
    const submitProductDataHandler = (event) => {
        event.preventDefault();
        if(!isFormValid){
            return
        }
        // console.log(productLongDescription)
        if(!props.editProduct){
            const id=Math.random().toString();
            // console.log(id);
            dispatch(productActions.addProduct({
            id,
            productName,
            productCategory,
            productPrice,
            productShortDescription,
            productLongDescription,
        }));
        }else{
            // console.log('It is working');
            // console.log(props);
            // console.log(props.product);
            // console.log(productName);
            // console.log(productCategory);
            const id = props.product.id;
            // console.log(id);
            dispatch(productActions.editProduct({
                id,
                productName,
                productCategory,
                productPrice,
                productShortDescription,
                productLongDescription,
            }))
        }
        resetProductName('');
        resetProductCategory('');
        resetProductPrice(0);
        resetProductShortDescription('');
        resetProductLongDescription('');
    }
    return(
            <form onSubmit={submitProductDataHandler}>
                <div className='control-group'>
                    <div className={productNameClasses}>
                        <label htmlFor='productName'>Product Name</label>
                        <input type="text" id="productName" value={productName} onChange={setProductNameHandler} onBlur={productNameBlurHandler}/>
                        {productNameHasError && <p className='error-text'>Please Enter the Product Name properly</p>}
                    </div>
                    <div className={productCategoryClasses}>
                        <label htmlFor='productCategory'>Product Category</label>
                        <input type="text" id="productCategory" value={productCategory} onChange={setProductCategoryHandler} onBlur={productCategoryBlurHandler}/>
                        {productCategoryHasError && <p className='error-text'>Please Enter the Product Category properly</p>}
                    </div>
                    <div className={productPriceClasses}>
                        <label htmlFor='productPrice'>Product Price</label>
                        <input type="number" id="productPrice" value={productPrice} onChange={setProductPriceHandler} onBlur={productPriceBlurHandler} />
                        {productPriceHasError && <p className='error-text'>Please Enter the Product Price properly</p>}
                    </div>
                    <div className={productShortDescriptionClasses}>
                        <label htmlFor='productShortDescription'>Product Short Description</label>
                        <input type="text" id="productShortDescription" value={productShortDescription} onChange={setProductShortDescriptionHandler} onBlur={productShortDescriptionBlurHandler}/>
                        {productShortDescriptionHasError && <p className='error-text'>Please Enter the Product Short Description properly</p>}
                    </div>
                    <div className={productLongDescriptionClasses}>
                        <label htmlFor='productLongDescription'>product Long Description</label>
                        <input type="text" id="productLongDescription" value={productLongDescription} onChange={setProductLongDescriptionHandler} onBlur={productLongDescriptionBlurHandler} />
                        {productLongDescriptionHasError && <p className='error-text'>Please Enter the Product Long Description properly</p>}
                    </div>
                    <div className='form-actions'>
                        <button type="button" onClick={addProductHandler}>Add Product</button>
                    </div>
                    <div className='form-actions'>
                        <button>Submit</button>
                    </div>
                </div>   
                {/* <div className='control-group'>
                    <div className={productNameClasses}>
                        <label htmlFor='productName'>Product Name</label>
                        <input type="text" id="productName" value={props.editProduct ? props.product.name : productName} onChange={setProductNameHandler} onBlur={productNameBlurHandler}/>
                        {productNameHasError && <p className='error-text'>Please Enter the Product Name properly</p>}
                    </div>
                    <div className={productCategoryClasses}>
                        <label htmlFor='productCategory'>Product Category</label>
                        <input type="text" id="productCategory" value={props.editProduct ? props.product.category : productCategory} onChange={setProductCategoryHandler} onBlur={productCategoryBlurHandler}/>
                        {productCategoryHasError && <p className='error-text'>Please Enter the Product Category properly</p>}
                    </div>
                    <div className={productPriceClasses}>
                        <label htmlFor='productPrice'>Product Price</label>
                        <input type="number" id="productPrice" value={props.editProduct ? props.product.price : productPrice} onChange={setProductPriceHandler} onBlur={productPriceBlurHandler} />
                        {productPriceHasError && <p className='error-text'>Please Enter the Product Price properly</p>}
                    </div>
                    <div className={productShortDescriptionClasses}>
                        <label htmlFor='productShortDescription'>Product Short Description</label>
                        <input type="text" id="productShortDescription" value={props.editProduct ? props.product.shortDescription : productShortDescription} onChange={setProductShortDescriptionHandler} onBlur={productShortDescriptionBlurHandler}/>
                        {productShortDescriptionHasError && <p className='error-text'>Please Enter the Product Short Description properly</p>}
                    </div>
                    <div className={productLongDescriptionClasses}>
                        <label htmlFor='productLongDescription'>product Long Description</label>
                        <input type="text" id="productLongDescription" value={props.editProduct ? props.product.longDescription : productLongDescription} onChange={setProductLongDescriptionHandler} onBlur={productLongDescriptionBlurHandler} />
                        {productLongDescriptionHasError && <p className='error-text'>Please Enter the Product Long Description properly</p>}
                    </div>
                    <div className='form-actions'>
                        <button>Submit</button>
                    </div>
                </div>      */}
            </form>
        )
}

export default AddProducts;