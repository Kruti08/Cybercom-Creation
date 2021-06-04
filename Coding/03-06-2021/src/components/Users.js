import api from "../axios-instance/instance";
import {useState} from 'react';
import Card from '../UI/Card';
import classes from '../UI/Card.module.css';

const Users = () => {
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    
    const setFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const setLastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        const userDetails = {
            firstName: firstname,
            lastName : lastname
        }
        try{
            const response = await api.post('/users.json', userDetails);
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            console.log(response);
            console.log('Function called');
            setLastName('');
            setFirstName('');
        }catch(error){
            console.log(error.message);
        }
        
        
    }

    return(
        <Card>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" className={classes.input} name="firstname" id="firstname" value={firstname} onChange={setFirstNameHandler}/><br />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" className={classes.input} id="lastname" value={lastname} onChange={setLastNameHandler}/><br />
                <button type="submit" className={classes.button}>Add User</button>
            </form>
        </Card>
    )
}

export default Users;