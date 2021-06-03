const GetCustomer =  async () => {
   
    try{
        const response = await fetch('https://react-app-8080d-default-rtdb.firebaseio.com/customers.json');
        if(!response.ok){
            throw new Error('Something Went Wrong !!');
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error.message());
    }    

    return (
       <h1>Get Customers</h1>
    )
}

export default GetCustomer;