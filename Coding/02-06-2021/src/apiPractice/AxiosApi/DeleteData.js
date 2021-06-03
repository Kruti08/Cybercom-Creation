import Config from './Config';

const DeleteData = () => {
    
    Config.delete('/users/1').then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    });

    return(
        <h1>Update Data</h1>
    )
}

export default DeleteData;