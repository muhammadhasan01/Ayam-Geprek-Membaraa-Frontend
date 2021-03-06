import React from 'react';
import './Header.css';
import Homepage from './Homepage';
import Menu from './Menu';
import Login from './Login';
import Order from './Order';
import LihatPesananAdmin from './LihatPesananAdmin';
import RiwayatPesanAdmin from './RiwayatPesanAdmin';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from "react-router-dom";


  

class Header extends React.Component {
    constructor() {
      super()
      this.state = {
        loggedin: false,
        sessionUname: 'Guest',
        admin: false
      }

      this.requestLoginSignUp = this.requestLoginSignUp.bind(this)
      this.signout = this.signout.bind(this)


      this.routes = [
        {
          path: "/",
          exact: true,
          main: () => <Homepage />
        },
        {
          path: "/login",
          main: () => <Login requestLoginSignUp={this.requestLoginSignUp} loggedin={this.state.loggedin} signout={this.signout} sessionUname={this.state.sessionUname}/>
        },
        {
            path: "/menu",
            main: () => <Menu />
          },
        {
          path: "/order",
          main: () => <Order sessionUname={this.state.sessionUname}/>
        },
        {
          path: "/orderList",
          main: () => <LihatPesananAdmin admin={this.state.admin}/>
        },
        {
          path: "/orderHistory",
          main: () => <RiwayatPesanAdmin admin={this.state.admin}/>
        }
      ];
    }

    requestLoginSignUp(login, username, password) {
      const endpoint = login ? "http://localhost:3001/login" : "http://localhost:3001/signup"
      fetch(endpoint,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: login ? JSON.stringify({username: username, password: password}) : JSON.stringify({username: username, password: password, admin:false}),
          method: "POST"
        })
        .then(response => response.json())
        .then(myJson => {
          if(login){
            this.setState({
              sessionUname: myJson.username,
              admin: myJson.admin,
              loggedin: true
            })
          };
        }).catch(err => alert("Account doesn't exist"));
    }

    signout(){
      this.setState({
        sessionUname: 'Guest',
        admin: false,
        loggedin: false
      })
    }

  render() {
      return(
            <div className='world'>
                <Router>
                <nav className='navbar'>
                    <div className='outer'>
                        <div className='inner'><Link to="/login">{(!this.state.loggedin ? "LOGIN" : (this.state.admin ? "ADMIN" : this.state.sessionUname.toUpperCase()))}</Link></div>
                        <div className="vl"></div>
                        <div className='inner'><Link to="/">BERANDA</Link></div>
                        <div className="vl"></div>
                        <div className='inner'><Link to="/menu">MENU</Link></div>
                        <div className="vl"></div>
                        {
                          !this.state.admin ? 
                          <div className='inner'><Link to="/order">PESAN SEKARANG!</Link></div> :
                          <div className='inner dropdown'>
                            <p>PESANAN</p>
                            <div class="dropdown-content">
                              <Link to="/orderList">LIHAT PESANAN</Link>
                              <Link to="/orderHistory">RIWAYAT PEMESANAN</Link>
                            </div>
                          </div>
                        }
                        
                    </div>
                </nav>

                <Switch>
                    {this.routes.map((route, index) => (
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
