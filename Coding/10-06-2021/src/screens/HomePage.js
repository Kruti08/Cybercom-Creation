import {Route} from 'react-router-dom';
import React from "react";

const HomePage = () => {
    return (
        <React.Fragment>
            <h1>Home Page</h1>
            <Route path='/homepage/user'>
                <p>Welcome user!!</p>
            </Route>
        </React.Fragment>
    )
}

export default HomePage;