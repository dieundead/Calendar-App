import React, { Component } from 'react';

import './register-page.scss';
import NavigationSidebar from "../../components/navigation-sidebar";
import {NavLink} from "react-router-dom";


class RegisterPage extends Component {

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
                <div className="reg-wrapper">
                    <h6 className="headline">Регистрация</h6>
                    <form method={"post"}>
                            <input className="input-field" placeholder="Ф.И.О." type="text"  name="lastname" required onChange={this.handleChange} value={this.state.lastname} />

                            <input className= "input-field" placeholder="Введите Email" type="text" size={25} name="email" required onChange={this.handleChange} value={this.state.email} />

                            <input className= "input-field" placeholder="Введите пароль"  type="password"  name="password" required onChange={this.handleChange} value={this.state.password} />

                        <h5 className="title">
                            Возможно, вы хотите <br/>выбрать расширенный аккаунт с семейным доступом?:<br/>
                            <input className= "radio-field"  type="radio" name="expansion"   required onChange={this.handleChange} value={this.state.expansion} />Да, хочу
                            <input className= "radio-field"  type="radio" name="expansion"  required onChange={this.handleChange} value={this.state.expansion}/>Нет, спасибо
                        </h5>
                        <input className="btn-submit" type="submit" value="Регистрация" />
                    </form>
                    <div className="bottom-wrapper">
                        <h4 className="bottom-field">Есть аккаунт?</h4>
                        <NavLink exact to="/enter" className="bottom-field link" activeClassName="active">Вход</NavLink>
                    </div>
                </div>
                </div>
            </div>


        );
    }

}

export default RegisterPage;
