import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <NavLink activeClassName='' to='/homepage'>HomePage</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='' to='/product'>Products</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header;