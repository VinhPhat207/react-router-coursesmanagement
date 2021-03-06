import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                        >
                            Trang chủ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/course-list"
                        >
                            Quản lý
                        </Link>
                    </li>
                </ul>

            </nav>
        );
    }
}

export default Navbar;