import Config from './Config';

const GetData = () => {
    
    Config.get('/users.json').then(response => {
        response.json()
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });

    return (
        <h1>Get data</h1>
    )
}

export default GetData;