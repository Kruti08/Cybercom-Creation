import Config from './Config';

const UpdateData = () => {
    const user = {
        id: 3,
        name : 'xyz',
        lastname: 'sdf'
    }
    Config.put('/users/1',user).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    });

    return(
        <h1>Update Data</h1>
    )
}

export default UpdateData;