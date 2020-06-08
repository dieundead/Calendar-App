import React, { Component } from 'react';

import './settings-page.scss';
import NavigationSidebar from "../../components/navigation-sidebar";

class SettingsPage extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {

    return (
        <div className="wrapper">
          <div className="left-sidebar">
            <NavigationSidebar/>
          </div>
          Пока что здесь ничего нет, но когда-то появится :)
        </div>
    );
  }

}

export default SettingsPage;
