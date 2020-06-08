import React, { Component } from 'react';

import './restore-page.scss';
import NavigationSidebar from "../../components/navigation-sidebar";

class RestorePage extends Component {

    constructor() {
        super();
        this.state = {value: ''};

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
                <div className="restore-box">
                    <h6>Не удается войти?</h6>
                    <p>Введите имя пользователя или электронный адрес, и мы отправим вам ссылку для восстановления доступа к аккаунту.</p>
                    <form method={"POST"}>
                            <input type="text" className="input-class" size={15}  name="login" required onChange={this.handleChange} value={this.state.login} />
                        <input className="btn-submit" type="submit" value="Отправить" />
                    </form>
                </div></div>
            </div>
        );
    }

}

export default RestorePage;