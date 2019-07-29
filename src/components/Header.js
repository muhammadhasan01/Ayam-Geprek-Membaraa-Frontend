import React from 'react';
import './Header.css';
import Homepage from './Homepage';
import Menu from './Menu';
import Login from './Login';
import Order from './Order';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from "react-router-dom";

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Homepage />
    },
    {
      path: "/login",
      main: () => <Login />
    },
    {
        path: "/menu",
        main: () => <Menu />
      },
    {
      path: "/order",
      main: () => <Order />
    }
  ];
  

class Header extends React.Component {
    // constructor() {
    //     super()
    // }

  render() {
      return(
            <div className='world'>
                <Router>
                <nav className='navbar'>
                    <div className='outer'>
                        <div className='inner'><Link to="/login">LOGIN</Link></div>
                        <div className="vl"></div>
                        <div className='inner'><Link to="/">BERANDA</Link></div>
                        <div className="vl"></div>
                        <div className='inner'><Link to="/menu">MENU</Link></div>
                        <div className="vl"></div>
                        <div className='inner'><Link to="/order">PESAN SEKARANG!</Link></div>
                    </div>
                </nav>

                <Switch>
                    {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                        />
                    ))}
                    <Route component={NoMatch} />
                </Switch>

                </Router>
            </div>
      )
  }
}

export default Header;

function NoMatch({ location }) {
    return (
      <div>
        <h3>
          No route for <code>{location.pathname}</code>.
        </h3>
      </div>
    );
  }
