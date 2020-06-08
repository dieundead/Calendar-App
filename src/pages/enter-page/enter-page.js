import React, { Component } from 'react';

import './enter-page.scss';
import NavigationSidebar from "../../components/navigation-sidebar";
import {NavLink} from "react-router-dom";

class EnterPage extends Component {

  constructor() {
    super();
    this.state = {
        value:''
    };
     this.handleChange= this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({
          [e.target.name] : e.target.value
      });
  }



    render() {

    return (

        <div className="wrapper">
          <div className="left-sidebar">
            <NavigationSidebar/>
          </div>
            <div className="panel-main">
            <div className="box-register">
                <h5 className="enter-title">Войти</h5>
                <form method="post">
                    <input className="input-field" placeholder="Ваш Email" type="text"  name="login" required onChange={this.handleChange} value={this.state.login}/>
                    <input className= "input-field" type="password"  placeholder="Ваш пароль"  name="password" required onChange={this.handleChange} value={this.state.password}/>
                   <br/>
                    <input className="btn-submit" type="submit" value="Войти"/>
                </form>
                <br/><br/>
                <NavLink exact to="/forget"  activeClassName="active" className="bottom-reg">Забыли пароль?</NavLink>
                <NavLink exact to="/register"  activeClassName="active" className="bottom-reg reg">Зарегистрироваться</NavLink>
            </div>
            </div>
        </div>

    );
  }

}

export default EnterPage;
