import React from 'react'
import Menu from './Menu';
import "./main_css/style.css"
import ReactBootstrap, {Jumbotron, Button, Col, Grid, Panel, FormGroup,NavDropdown,Nav,Navbar,Form,FormControl} from 'react-bootstrap'


const Base = ({
    title="My Title",
    description = "My Description",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
        <div>
            <Menu/>
                <div className="container">

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button type="submit">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

                {/* <div className="jumbotron bg-dark text-black text-center">
                    <h2 className="display-4"> {title}  </h2>
                    <p className="lead"> {description} </p>
                </div> */}

                <div className={className}> {children}</div>

            </div>
            <footer className="footer bg-success mt-auto py-3">
                <div className="container-fluid bg-sucess text-white text-center py-3">
                    <h4>If you got any questions, reach me out</h4>
                    <button type="" className="btn btn-warning btn-lg"> <a href="https://pradhyumvyas.github.io" target="_blank">here</a></button>
                    <div className="container">
                        <span className="">
                            An Amazing E-Commerce website
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Base;