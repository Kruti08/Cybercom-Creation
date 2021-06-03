import Config from './Config.js'

const PostData = () => {
    const user = {
        'id' : 2,
        'name':'abc',
        'username': 'xyz'
    }

    Config.post('/users.json',user).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    });

    return (
        <h1>It works</h1>
    )
}

export default PostData;