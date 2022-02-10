import React from 'react';

class Header extends React.Component {
    render()
    {
       return (
            <div>

              <header className="header" id="header">
              <nav className="nav">
                <div className="search">
                <i className="fas fa-search" />
                </div>
                <h1><a href="#" className="logo">shoes<span>.</span></a></h1>
                <div className="nav-menu " id="nav-menu">
                <div className="logo-menu">
                    <h1><a href="#" className="logo">shoes<span>.</span></a></h1>
                    <i className="fas fa-times close" />
                </div>
                <ul className="nav-list">
                    <li className="box-login">
                    <i className="fas fa-user" />
                    <a href="#" className="nav-login">account</a>
                    </li>
                    <li><a href="#populars" className="nav-link active">populars</a></li>
                    <li><a href="#category" className="nav-link">category</a></li>
                    <li><a href="#gallery" className="nav-link">gallery</a></li>
                    <li><a href="#collection" className="nav-link">collection</a></li>
                </ul>
                </div>
                <div className="right-menu">
                <div className="search">
                    <i className="fas fa-search" />
                </div>
                <div className="menu-login">
                    <i className="fas fa-user" />
                </div>
                <div className="box-cart">
                    <i className="fas fa-shopping-cart cart" />
                    <span>0</span>
                </div>
                <div className="nav-toggle">
                    <i className="fas fa-bars" />
                </div>
                </div>
            </nav>
            </header>

            </div>
    )
    }
  
}

export default Header;
