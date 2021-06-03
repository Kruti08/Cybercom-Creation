const UpdateCustomer = async() => {
    const customer = {
        'id':3,
        'name': 'Krina',
        'paidAmont': 1000
    }

    try{
        const response = await fetch('https://react-app-8080d-default-rtdb.firebaseio.com/customers/',{
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(customer)
            });

        if(!response.ok){
            throw new Error('There might be some issue !!');
        }    
        const data = response.json();
        console.log(data);

    }catch(error){
        console.log(error.message)
    }

return (
   <h1>Update Customer</h1>
)
}

export default UpdateCustomer;