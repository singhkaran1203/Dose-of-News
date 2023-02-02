import {Link} from "react-router-dom";



function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Dose of News</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/technology">Technology</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;