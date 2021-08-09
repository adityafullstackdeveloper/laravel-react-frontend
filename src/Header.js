import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-com Project</Navbar.Brand>
                <Nav className="mr-auto">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <NavItem><Link className="nav-link" to="/add">Add Product</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/update">Update Product</Link></NavItem>
                            </>
                            :
                            <>
                                <NavItem><Link className="nav-link" to="/register">Register</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/login">Login</Link></NavItem>
                            </>
                    }
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;