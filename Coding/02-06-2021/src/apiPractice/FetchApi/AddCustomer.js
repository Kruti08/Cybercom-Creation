const AddCustomer =  async () => {
   
    const customer = {
            'id':2,
            'name': 'Krina',
            'paidAmont': 1000
        }
    
    try{
        const response = await fetch('https://react-app-8080d-default-rtdb.firebaseio.com/customers.json',{
                                            method: 'POST',
                                            headers: {
                                                'Content-type': 'application/json'
                                            },
                                            body: JSON.stringify(customer)
                                            })
        if(!response.ok){
            throw new Error('Something is wrong !!!');
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error.message());
    }    


    return (
       <h1>Add Customer</h1>
    )
}

export default AddCustomer;