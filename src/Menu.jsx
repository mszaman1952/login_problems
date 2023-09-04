import {NavLink} from "react-router-dom"

const Menu = () => {
    return (
        <div className="d-flex justify-content-around align-content-center">
            <ul className="list-group">
                <li className="list-group-item"><NavLink to="/">Home</NavLink></li>
                <li className="list-group-item"><NavLink to="/login">Login</NavLink></li>
                <li className="list-group-item"><NavLink to="/registration">Registration</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;