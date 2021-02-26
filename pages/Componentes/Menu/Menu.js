import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';


function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark" bg="info" expand="lg" fixed="top" >
            <Navbar.Brand>
                <img src = {logo} className="img d-inline-block align-top" width="80" alt="FullStackEletro"/>
            </Navbar.Brand>
         
            <Navbar.Collapse id="basic-navbar-nav">

            </Navbar.Collapse>
        </Navbar>
    )
}


export default BaseMenu;