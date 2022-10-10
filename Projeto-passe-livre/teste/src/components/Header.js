import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo_faders from '../img/logo_faders.png';


function Header() {
    return (
        <div className='header'>
            <Navbar bg="light" variant="light" >
                <Container >
                    <Nav id='navbar'>
                        <Link to="/"><img src={Logo_faders} width='130' /></Link>
                        <Nav.Link href="/home-servidor">Home</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                    </Nav>
                    <Nav id='navbar'>
                        <Navbar.Collapse>
                            <Navbar.Text>Bem-vindo (Nome) |</Navbar.Text>
                            <Nav.Link href="/">Sair</Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
}

export default Header;