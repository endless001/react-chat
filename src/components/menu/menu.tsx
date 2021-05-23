import React from 'react';
import 'components/menu/menu.css';
import { Dropdown, Nav } from 'react-bootstrap';
import avatar from "assets/images/users/avatar-1.jpg";
import logo from "assets/images/logo.svg";
import { CustomToggle } from "components/toggle/custom-toggle"


export const Menu = () => {
    return(
        <div className="side-menu flex-lg-column mr-lg-1">
            <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src={logo} alt="" height="30"/>
                        </span>
                </a>
            </div>

            <div className="flex-lg-column my-auto">
                <Nav defaultActiveKey="/home" className="side-menu-nav justify-content-center">
                    <Nav.Item as="li">
                        <a className="nav-link">
                            <i className="ri-user-2-line"></i>
                        </a>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <a className="nav-link">
                            <i className="ri-message-3-line"></i>
                        </a>
                    </Nav.Item>
                    <Nav.Item  as="li">
                        <a className="nav-link">
                             <i className="ri-group-line"></i>
                        </a>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <a className="nav-link">
                             <i className="ri-contacts-line"></i>
                        </a>
                    </Nav.Item>
                    <Nav.Item  as="li">
                        <a className="nav-link">
                            <i className="ri-settings-2-line"></i>
                        </a>
                    </Nav.Item>
                </Nav>

            </div>

            <div className="flex-lg-column d-none d-lg-block">
                    <Nav defaultActiveKey="/home"  className="side-menu-nav justify-content-center">
                        <Nav.Item as="li">
                            <a className="nav-link">
                                <i className="ri-sun-line theme-mode-icon"></i>
                            </a>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                    <img src={avatar} alt="" className="profile-user rounded-circle"/>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as="li">
                                        <a className="dropdown-item" href="#">Profile <i
                                            className="ri-profile-line float-right text-muted"></i></a>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <a className="dropdown-item" href="#">Setting <i
                                            className="ri-settings-3-line float-right text-muted"></i></a>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="li">
                                        <a className="dropdown-item" href="#">Log out <i
                                            className="ri-logout-circle-r-line float-right text-muted"></i></a>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
            </div>
        </div>);
}

