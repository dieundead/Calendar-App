import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CalendarIcon from "../../assets/calendar-icon.svg";
import DocumentIcon from "../../assets/document-icon.svg";
import SettingIcon from "../../assets/settings-icon.svg";
import TaskIcon from "../../assets/task-icon.svg";

import './navigation-sidebar.scss';

class NavigationSidebar extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {

    return (
        <div className="navigation-sidebar">
            <NavLink exact to="/" activeClassName="active" className="title-calendar">Календарь</NavLink>
            <h6 className="menu">Меню</h6>
          <ul className="main-nav">
            <li>
              <img className="icon" src={CalendarIcon} alt="calendar"/>
              <NavLink exact to="/" className="link" activeClassName="active">Календарь</NavLink>
            </li>
            <li>
              <img className="icon" src={DocumentIcon} alt="document"/>
              <NavLink exact to="/enter" className="link" activeClassName="active">Войти</NavLink>
            </li>
            <li>
              <img className="icon" src={TaskIcon} alt="task"/>
              <NavLink exact to="/events" className="link" activeClassName="active">События</NavLink>
            </li>
            <li>
              <img className="icon" src={SettingIcon} alt="setting"/>
              <NavLink exact to="/settings" className="link" activeClassName="active">Настройки</NavLink>
            </li>
          </ul>
        </div>
    );
  }

}

export default NavigationSidebar;
