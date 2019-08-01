import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
 } from 'reactstrap';

 import { NavLink as WebsiteNavLink } from "react-router-dom";

 import './Nav.scss';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <WebsiteNavLink to="/">
          <div className="navbar-brand">forLife Fitness</div>
          </WebsiteNavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <WebsiteNavLink className="nav-link" to="/dashboard">
                Track Workout
                </WebsiteNavLink>
              </NavItem>
              <NavItem>
                <WebsiteNavLink className="nav-link" to="/dashboard">
                Progress Shots
                </WebsiteNavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <Button>
              <WebsiteNavLink className="jointext" to="/signup">
                Join Now
              </WebsiteNavLink>
              </Button>
              <Button>
              <WebsiteNavLink className="signintext" to="/login">
                Sign In
              </WebsiteNavLink>
              </Button>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}