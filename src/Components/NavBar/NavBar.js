import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5" to="/home"><strong>Day-Out Rider</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link active me-5" aria-current="page" to="/home">Home</Link>
                            <button className="border-0 rounded me-5" onClick={() => setLoggedInUser({})}><strong>Log out</strong></button>
                            <p className="nav-link me-5"><strong>{loggedInUser.name}</strong></p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;