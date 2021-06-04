import api from '../axios-instance/instance';
import {Fragment,useState} from 'react';
import Card from '../UI/Card';
import classes from  '../UI/Card.module.css';

const UserList = () => {

    const [users, setUsers] = useState([]);

    const userListHandler = async () => {
        try {
            const response = await api.get('/users.json');
            if(!response.ok){
                throw new Error('Something Went Wrong');
            }
            if(!response.data){
                throw new Error('There is not data to show');
            }
            const allUsers = response.data;
            for(const user in allUsers){
                users.push(allUsers[user]);
            }
            setUsers(users);
            console.log(users);
        } catch (error) {
            console.log(error.message);
        }
        
    }

    return (
        <Fragment>
        <Card>
            <button className={classes.button} onClick={userListHandler}>Show Users</button>
        </Card>        
        <ol className={classes.ol}>
        {console.log(users)}
        { users && users.map(user => {
            return (
                <li>firstname: {user.firstName}, lastname: {user.lastName}</li>
            )
        })}
        </ol>
        </Fragment>
    )

}

export default UserList;