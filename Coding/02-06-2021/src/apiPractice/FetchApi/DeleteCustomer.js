const DeleteCustomer = async () => {

    try{
        const response = await fetch('https://react-app-8080d-default-rtdb.firebaseio.com/customers/1',{
                                        method: 'DELETE',
                                        headers: {
                                            'Content-type': 'application/json'
                                        },
                                    });
        
        if(!response.ok){
            throw new Error('Something went wrong!');
        }
        const responseData = response.json();
        console.log(responseData);                            
                                    
    }catch(error){
        console.log(error.message)
    } 

    return (
        <h1>Delete Customer</h1>
    )
}

export default DeleteCustomer;